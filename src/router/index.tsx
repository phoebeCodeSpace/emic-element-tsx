import VIcon from '../views/VIcon';
import VButton from '../views/VButton';
import VModal from '../views/VModal';
import VAlert from '../views/VAlert';
import VAnimate from '../views/VAnimate';
import VNotification from '../views/VNotification';

const routes = [
  {
    name: 'animate',
    path: '/animate',
    component: VAnimate
  },
  {
    name: 'icon',
    path: '/icon',
    component: VIcon
  },
  {
    name: 'button',
    path: '/button',
    component: VButton
  },
  {
    name: 'modal',
    path: '/modal',
    component: VModal
  },
  {
    name: 'alert',
    path: '/alert',
    component: VAlert
  },
  {
    name: 'notification',
    path: '/notification',
    component: VNotification
  },
];

export default routes;