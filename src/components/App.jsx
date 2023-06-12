// import Repeta from './Repeta/Repeta';
import './App.scss';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { PureComponent } from 'react';
import handleSearchHits from './apiService/search_api.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    searchRequest: '',
    searchHits: [],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      handleSearchHits(this.state.searchRequest)
        .then(request => {
          console.log(request.data.hits);
          if (request.data.hits.length === 0) {
            toast.error('Didn`t find anything on this request', toastStyle);
          }
          this.setState({ searchHits: [...request.data.hits] });
          setTimeout(
            () => console.log('searchHits: ', this.state.searchHits),
            0
          );
        })
        .catch(error => toast.error(error.message, toastStyle));
    }
  }
  // *********************************************
  handleArivedData = searchRequest => {
    console.log('Conrtol change:', searchRequest);
    this.setState({ searchRequest });
  };
  // *********************************************

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleArivedData} />
        <ToastContainer />
        <ImageGallery picturesArr={this.state.searchHits} />
        {/* <Repeta /> */}
      </div>
    );
  }
}
