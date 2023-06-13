import { ClipLoader, CircleLoader } from 'react-spinners';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import './Loader.scss';
import plug_image from './searching.png';

export default function Loader() {
  const skeleton = {
    id: 0,
    largeImageURL: '',
    webformatURL: '',
    tags: '',
  };
  return (
    <div role="alert">
      <div className="loader">
        <CircleLoader
          color={'#3F51B5'}
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <ImageGallery picturesArr={new Array(12).fill(skeleton)} />
    </div>
  );
}
