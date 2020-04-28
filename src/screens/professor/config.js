export default {
    items: [
      {
        name: 'Inicio',
        url: '/professor/home',
        icon: 'icon-chart',
        badge: {
          variant: 'info',
          text: 'Nuevo',
        },
      },
      {
        name: 'Cuenta',
        url: '/professor/settings',
        icon: 'icon-user',
      },
      {
        title: true,
        name: 'Theme',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Colors',
        url: '/professor/theme/colors',
        icon: 'icon-drop',
      },
      {
        name: 'Typography',
        url: '/professor/theme/typography',
        icon: 'icon-pencil',
      },
      {
        title: true,
        name: 'Components',
        wrapper: {
          element: '',
          attributes: {},
        },
      },
      {
        name: 'Base',
        url: '/professor/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Breadcrumbs',
            url: '/professor/base/breadcrumbs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Cards',
            url: '/professor/base/cards',
            icon: 'icon-puzzle',
          },
          {
            name: 'Carousels',
            url: '/professor/base/carousels',
            icon: 'icon-puzzle',
          },
          {
            name: 'Collapses',
            url: '/professor/base/collapses',
            icon: 'icon-puzzle',
          },
          {
            name: 'Dropdowns',
            url: '/professor/base/dropdowns',
            icon: 'icon-puzzle',
          },
          {
            name: 'Forms',
            url: '/professor/base/forms',
            icon: 'icon-puzzle',
          },
          {
            name: 'Jumbotrons',
            url: '/professor/base/jumbotrons',
            icon: 'icon-puzzle',
          },
          {
            name: 'List groups',
            url: '/professor/base/list-groups',
            icon: 'icon-puzzle',
          },
          {
            name: 'Navs',
            url: '/professor/base/navs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Paginations',
            url: '/professor/base/paginations',
            icon: 'icon-puzzle',
          },
          {
            name: 'Popovers',
            url: '/professor/base/popovers',
            icon: 'icon-puzzle',
          },
          {
            name: 'Progress Bar',
            url: '/professor/base/progress-bar',
            icon: 'icon-puzzle',
          },
          {
            name: 'Switches',
            url: '/professor/base/switches',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tables',
            url: '/professor/base/tables',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tabs',
            url: '/professor/base/tabs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tooltips',
            url: '/professor/base/tooltips',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        name: 'Buttons',
        url: '/professor/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/professor/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/professor/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/professor/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/professor/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Charts',
        url: '/professor/charts',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Icons',
        url: '/professor/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/professor/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'info',
              text: 'NEW',
            },
          },
          {
            name: 'Flags',
            url: '/professor/icons/flags',
            icon: 'icon-star',
          },
          {
            name: 'Font Awesome',
            url: '/professor/icons/font-awesome',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7',
            },
          },
          {
            name: 'Simple Line Icons',
            url: '/professor/icons/simple-line-icons',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Notifications',
        url: '/professor/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/professor/notifications/alerts',
            icon: 'icon-bell',
          },
          {
            name: 'Badges',
            url: '/professor/notifications/badges',
            icon: 'icon-bell',
          },
          {
            name: 'Modals',
            url: '/professor/notifications/modals',
            icon: 'icon-bell',
          },
        ],
      },
      {
        name: 'Widgets',
        url: '/professor/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW',
        },
      },
      {
        divider: true,
      },
      {
        title: true,
        name: 'Extras',
      },
      {
        name: 'Pages',
        url: '/professor/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/professor/login',
            icon: 'icon-star',
          },
          {
            name: 'Register',
            url: '/professor/register',
            icon: 'icon-star',
          },
          {
            name: 'Error 404',
            url: '/professor/404',
            icon: 'icon-star',
          },
          {
            name: 'Error 500',
            url: '/professor/500',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Disabled',
        url: '/professor/dashboard',
        icon: 'icon-ban',
        attributes: { disabled: true },
      },
      {
        name: 'Download CoreUI',
        url: 'https://coreui.io/react/',
        icon: 'icon-cloud-download',
        class: 'mt-auto',
        variant: 'success',
        attributes: { target: '_blank', rel: "noopener" },
      },
      {
        name: 'Try CoreUI PRO',
        url: 'https://coreui.io/pro/react/',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: { target: '_blank', rel: "noopener" },
      },
    ],
  };
  