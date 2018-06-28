export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Customers',
  //   url: '/customer',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Customers List',
  //       url: '/customer',
  //       icon: 'icon-drop'
  //     },
  //   ]
  // },
  {
    name: 'Employees',
    url: '/employees',
    icon: 'icon-star',
    children: [
      {
        name: 'Employees List',
        url: '/employees',
        icon: 'icon-drop'
      },
    ]
  },
  {
    name: 'Theme',
    url: '/theme',
    icon: 'icon-star',
    children: [
      {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      },
    ]
  }
];
