export default function controlPosition() {
  // getBoundingClientRect;
  const gallery = document.querySelector('#gallery');
  if (!gallery) {
    return;
  }
  const galleryParams = gallery.getBoundingClientRect();
  console.log('Params of Gallery: ', galleryParams);

  window.scrollTo(0, galleryParams.height);
}
