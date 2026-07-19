import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/API/api.js';
import TypeError from '@/util/TypeError.js';
import { upLoadFile, desertFile } from '@/util/firebase.js';

export const useCleanEventStore = defineStore('cleanEvent', () => {
  const eventMarkers = ref([]);
  const eventDetail = ref(null);
  const mapSnapshot = ref('');

  async function getEventMarkers() {
    const markers = await api.fetch('getEventMarkers', {
      method: 'get',
      table: 'markers',
    });
    eventMarkers.value = markers || [];
  }

  async function getCleanEvent(id) {
    const event = await api.fetch('getCleanEvent', {
      method: 'get',
      table: 'events',
      id,
    });

    if (!event) {
      throw new Error('noData');
    }

    eventDetail.value = event;
    return event;
  }

  function setEventDetail(event) {
    eventDetail.value = event;
  }

  function setMapSnapshot(src) {
    mapSnapshot.value = src;
  }

  async function setCleanEvent(eventObj) {
    let photoUrl = [];
    const files = [...eventObj.photos];
    delete eventObj.photos;

    try {
      const promises = files
        .filter(Boolean)
        .map(file =>
          upLoadFile(eventObj.date.from, eventObj.userInfo.email, file)
        );

      photoUrl = await Promise.all(promises);

      if (photoUrl.includes('error')) {
        throw new TypeError(
          '파일업로드에 실패했습니다. <br/> 잠시후 다시 시도바랍니다.',
          'critical',
          'storageUpload'
        );
      }

      await api.transactionFetchData(
        {
          method: 'post',
          table: 'events',
          id: eventObj.id,
          obj: { ...eventObj, photoUrl },
        },
        {
          method: 'post',
          table: 'markers',
          id: eventObj.id,
          obj: {
            id: eventObj.id,
            position: eventObj.position,
            scale: eventObj.scale,
          },
        }
      );

      return { photoUrl };
    } catch (error) {
      const promises = files.map((file, idx) => {
        if (file && photoUrl[idx] !== 'error') {
          return desertFile(
            eventObj.date.from,
            eventObj.userInfo.email,
            file.name
          );
        }
        return null;
      });
      await Promise.all(promises.filter(Boolean));
      throw error;
    }
  }

  return {
    eventMarkers,
    eventDetail,
    mapSnapshot,
    getEventMarkers,
    getCleanEvent,
    setEventDetail,
    setMapSnapshot,
    setCleanEvent,
  };
});
