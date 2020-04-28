import React from 'react';

const Breadcrumbs = React.lazy(() => import('../../components/views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('../../components/views/Base/Cards'));
const Carousels = React.lazy(() => import('../../components/views/Base/Carousels'));
const Collapses = React.lazy(() => import('../../components/views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('../../components/views/Base/Dropdowns'));
const Forms = React.lazy(() => import('../../components/views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('../../components/views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('../../components/views/Base/ListGroups'));
const Navbars = React.lazy(() => import('../../components/views/Base/Navbars'));
const Navs = React.lazy(() => import('../../components/views/Base/Navs'));
const Paginations = React.lazy(() => import('../../components/views/Base/Paginations'));
const Popovers = React.lazy(() => import('../../components/views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('../../components/views/Base/ProgressBar'));
const Switches = React.lazy(() => import('../../components/views/Base/Switches'));
const Tables = React.lazy(() => import('../../components/views/Base/Tables'));
const Tabs = React.lazy(() => import('../../components/views/Base/Tabs'));
const Tooltips = React.lazy(() => import('../../components/views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('../../components/views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('../../components/views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('../../components/views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('../../components/views/Buttons/Buttons'));
const Charts = React.lazy(() => import('../../components/views/Charts'));
const Dashboard = React.lazy(() => import('../../components/views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('../../components/views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('../../components/views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('../../components/views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('../../components/views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('../../components/views/Notifications/Alerts'));
const Badges = React.lazy(() => import('../../components/views/Notifications/Badges'));
const Modals = React.lazy(() => import('../../components/views/Notifications/Modals'));
const Colors = React.lazy(() => import('../../components/views/Theme/Colors'));
const Typography = React.lazy(() => import('../../components/views/Theme/Typography'));
const Widgets = React.lazy(() => import('../../components/views/Widgets/Widgets'));
const Users = React.lazy(() => import('../../components/views/Users/Users'));
const User = React.lazy(() => import('../../components/views/Users/User'));


const HomeScreen = React.lazy(() => import('./subScreens/HomeScreen'));
const SettingsScreen = React.lazy(() => import('./subScreens/SettingsScreen'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/professor/home', name: 'Inicio', component: HomeScreen },
  { path: '/professor/settings', name: 'Cuenta', component: SettingsScreen },
  { path: '/professor/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/professor/theme/colors', name: 'Colors', component: Colors },
  { path: '/professor/theme/typography', name: 'Typography', component: Typography },
  { path: '/professor/base', exact: true, name: 'Base', component: Cards },
  { path: '/professor/base/cards', name: 'Cards', component: Cards },
  { path: '/professor/base/forms', name: 'Forms', component: Forms },
  { path: '/professor/base/switches', name: 'Switches', component: Switches },
  { path: '/professor/base/tables', name: 'Tables', component: Tables },
  { path: '/professor/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/professor/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/professor/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/professor/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/professor/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/professor/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/professor/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/professor/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/professor/base/navs', name: 'Navs', component: Navs },
  { path: '/professor/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/professor/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/professor/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/professor/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/professor/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/professor/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/professor/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/professor/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/professor/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/professor/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/professor/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/professor/icons/flags', name: 'Flags', component: Flags },
  { path: '/professor/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/professor/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/professor/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/professor/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/professor/notifications/badges', name: 'Badges', component: Badges },
  { path: '/professor/notifications/modals', name: 'Modals', component: Modals },
  { path: '/professor/widgets', name: 'Widgets', component: Widgets },
  { path: '/professor/charts', name: 'Charts', component: Charts },
  { path: '/professor/users', exact: true,  name: 'Users', component: Users },
  { path: '/professor/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
