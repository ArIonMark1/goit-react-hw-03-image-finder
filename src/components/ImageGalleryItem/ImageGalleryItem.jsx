import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ largeImage, smallImage, tags }) => {
  console.log(tags);
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={smallImage} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImage: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
