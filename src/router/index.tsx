import VIcon from '../views/VIcon';
import VButton from '../views/VButton';
import VModal from '../views/VModal';

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
];

export default routes;