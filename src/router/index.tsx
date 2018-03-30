import VIcon from '../views/VIcon';
import VButton from '../views/VButton';
import VModal from '../views/VModal';
import VAlert from '../views/VAlert';

const routes = [
  {
    name: 'icon',
    path: '/icon',
    exact: true,
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
];

export default routes;