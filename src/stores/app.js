import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '@/router';

export const useAppStore = defineStore('app', () => {
  const currentPosition = ref({ lat: 0, lng: 0 });
  const currentAddress = ref('주소가 정확하지 않습니다.');
  const error = ref({
    flag: false,
    type: '',
    message: '',
  });
  const isLoading = ref(false);
  let errorTimer = null;

  function setLoading(flag) {
    isLoading.value = flag;
  }

  function setError({ message, type }) {
    if (errorTimer) {
      clearTimeout(errorTimer);
      errorTimer = null;
    }

    error.value = {
      flag: true,
      type,
      message,
    };

    if (type !== 'critical') {
      errorTimer = setTimeout(() => {
        error.value = {
          flag: false,
          type: '',
          message: '',
        };
      }, 3000);
    }
  }

  function initError() {
    error.value = {
      flag: false,
      type: '',
      message: '',
    };
  }

  function moveToMaps() {
    router.replace({ name: 'maps/Main' });
  }

  function moveToRealHome() {
    router.push({ name: 'realhome' });
  }

  function clickCriticError() {
    initError();
    moveToRealHome();
  }

  async function setCurPosition(pos) {
    if (pos) {
      currentPosition.value = { lat: pos.lat, lng: pos.lng };
      return;
    }

    if (!navigator.geolocation) {
      throw new Error('브라우저 및 PC의 위치 엑세스를 허용해주세요.');
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 8000,
          maximumAge: 60_000,
        });
      });

      if (!position) {
        throw new Error('noAccess');
      }

      currentPosition.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch (e) {
      let message =
        '브라우저가 GPS정보를 제공하지 않습니다.<br/>5.0버전 이상의 Chrome/Safari 브라우저로 이용바랍니다.';

      if (e.message === 'noAccess') {
        message = '현재위치정보를 확인 할 수 없습니다.';
      }
      if (
        e.message === 'User denied Geolocation' ||
        e.code === 1 /* PERMISSION_DENIED */
      ) {
        message = '브라우저 및 PC의 위치 엑세스를 허용해주세요.';
      }
      if (e.message === 'Timeout expired' || e.code === 3) {
        message =
          '위치 정보를 가져오지 못했습니다.<br/>잠시 후 다시 시도하거나 위치 권한을 확인해주세요.';
      }

      throw new Error(message);
    }
  }

  function setCurAddress(address) {
    currentAddress.value = address;
  }

  return {
    currentPosition,
    currentAddress,
    error,
    isLoading,
    setLoading,
    setError,
    initError,
    moveToMaps,
    moveToRealHome,
    clickCriticError,
    setCurPosition,
    setCurAddress,
  };
});
