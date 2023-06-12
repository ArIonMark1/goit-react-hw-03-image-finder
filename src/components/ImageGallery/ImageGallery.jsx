import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ picturesArr }) => {
  return (
    <ul className="ImageGallery">
      {picturesArr &&
        picturesArr.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            largeImage={picture.largeImageURL}
            smallImage={picture.webformatURL}
            tags={picture.tags}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;

// ImageGallery.propTypes = {
//   picturesArr: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       tags: PropTypes.string,
//     })
//   ),
// };
