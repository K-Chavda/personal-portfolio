const getDeviceType = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    if (window.innerWidth <= 767) {
      return "Mobile";
    } else if (window.innerWidth <= 1024) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    if (window.innerWidth <= 767) {
      return "Mobile";
    } else {
      return "Tablet";
    }
  }

  if (/Macintosh/.test(userAgent) && "ontouchend" in document) {
    return "Tablet"; // iPad running iPadOS 13 or later
  }

  if (window.innerWidth <= 767) {
    return "Mobile";
  } else if (window.innerWidth <= 1024) {
    return "Tablet";
  } else {
    return "Desktop";
  }
};

export default getDeviceType;
