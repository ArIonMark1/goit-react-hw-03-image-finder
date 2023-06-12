import { PureComponent } from 'react';
import './Searchbar.scss';
import { toast } from 'react-toastify';
/*
Компонент приймає один проп onSubmit – 
функцію для передачі значення інпута під час сабміту форми. 
*/
export default class Searchbar extends PureComponent {
  state = {
    searchData: '',
  };

  handleFillingField = evt => {
    this.setState({ searchData: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmitForm = evt => {
    evt.preventDefault();
    if (this.state.searchData.trim() === '') {
      return toast.error('Please Enter data for searching.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    this.props.onSubmit(this.state.searchData);
    this.setState({ searchData: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmitForm}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              value={this.state.searchData}
              onChange={this.handleFillingField}
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
