// import Repeta from './Repeta/Repeta';
import './App.scss';

import { PureComponent } from 'react';
import handleSearchHits from './apiService/search_api.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

const toastStyle = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
export default class App extends PureComponent {
  state = {
    page: 1,
    searchRequest: '',
    searchHits: [],
    isLoading: false,
    isLoaded: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchRequest, page } = this.state;

    if (prevState.searchRequest !== searchRequest || prevState.page !== page) {
      this.setState({ isLoading: true });
      handleSearchHits(searchRequest, page)
        .then(request => {
          if (request.data.hits.length === 0) {
            toast.error('Didn`t find anything on this request', toastStyle);
          }
          this.setState(prevState => ({
            searchHits: [...prevState.searchHits, ...request.data.hits],
          }));
          setTimeout(
            () => console.log('searchHits: ', this.state.searchHits),
            0
          );
        })
        .catch(error => toast.error(error.message, toastStyle))
        .finally(() => this.setState({ isLoading: false, isLoaded: true }));
    }
  }
  // *********************************************
  handleArivedData = searchRequest => {
    this.setState({ page: 1, searchRequest, searchHits: [], isLoaded: false });
  };
  // *********************************************
  handleLoadMoreData = searchRequest => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { searchHits, isLoading, isLoaded } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleArivedData} />
        <ToastContainer />

        {isLoading ? <Loader /> : <ImageGallery picturesArr={searchHits} />}
        {isLoaded && (
          <Button onConfirm={this.handleLoadMoreData}>Load more</Button>
        )}
      </div>
    );
  }
}
