export function loadGoogleMaps() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return Promise.reject(
      new Error(
        'Google Maps API 키가 없습니다.<br/>.env에 VITE_GOOGLE_MAPS_API_KEY를 설정해주세요.'
      )
    );
  }

  if (window.google?.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (window.__googleMapsLoading) {
    return window.__googleMapsLoading;
  }

  window.__googleMapsLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.maps);
    script.onerror = () =>
      reject(
        new Error(
          '구글 지도 불러오기에 실패했습니다.<br/>잠시후 다시 시도 바랍니다.'
        )
      );
    document.head.appendChild(script);
  });

  return window.__googleMapsLoading;
}

export function getGoogleMapsApiKey() {
  return import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
}
