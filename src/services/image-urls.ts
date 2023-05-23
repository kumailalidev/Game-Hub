const getCroppedImageUrl = (url: string) => {
  const target = "media/";

  // index represent starting position of target (eg. media) parameter
  const index = url.indexOf(target) + target.length;

  // return new URL
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
