import { CircleLoader } from 'react-spinners';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
import './Loader.scss';
// import plug_image from './searching.png';

export default function Loader() {
  return (
    <div role="alert">
      <div className="loader">
        <CircleLoader
          color={'#3F51B5'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
