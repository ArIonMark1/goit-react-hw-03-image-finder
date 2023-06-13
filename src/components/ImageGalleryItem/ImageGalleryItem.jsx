import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends PureComponent {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const { largeImage, smallImage, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img className="ImageGalleryItem-image" src={smallImage} alt={tags} />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImage: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
