import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCamera,
  faGlobeAsia,
  faCalendarWeek,
  faUsers,
  faUserTag,
  faEnvelopeSquare,
  faUser,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import './styles/main.css';

library.add(
  faCamera,
  faGlobeAsia,
  faCalendarWeek,
  faUsers,
  faUserTag,
  faEnvelopeSquare,
  faUser,
  faPlus,
  faMinus
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
