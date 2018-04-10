import VIcon from '../views/VIcon';
import VButton from '../views/VButton';
import VModal from '../views/VModal';
import VAlert from '../views/VAlert';
import VAnimate from '../views/VAnimate';
import VNotification from '../views/VNotification';
import VTabs from '../views/VTabs';

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
  {
    name: 'tabs',
    path: '/tabs',
    component: VTabs
  },
];

export default routes;