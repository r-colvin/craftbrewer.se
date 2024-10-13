import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '255'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '822'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '49e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '115'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '62b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f5f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6a2'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/ayearinbeer/ayib-intro',
        component: ComponentCreator('/ayearinbeer/ayib-intro', '813'),
        exact: true
      },
      {
        path: '/ayearinbeer/Beers/2024/Sweden/January',
        component: ComponentCreator('/ayearinbeer/Beers/2024/Sweden/January', 'b8a'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/category/a-year-in-beer',
        component: ComponentCreator('/category/a-year-in-beer', 'c84'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/category/homebrewing',
        component: ComponentCreator('/category/homebrewing', 'b8a'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/category/maps',
        component: ComponentCreator('/category/maps', '17b'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/category/reference-library',
        component: ComponentCreator('/category/reference-library', 'b45'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/category/style-guide',
        component: ComponentCreator('/category/style-guide', '5b7'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/Homebrewing/Equipment/equipment-intro',
        component: ComponentCreator('/Homebrewing/Equipment/equipment-intro', '8a4'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/Homebrewing/Recipes/my_dead_pony_club',
        component: ComponentCreator('/Homebrewing/Recipes/my_dead_pony_club', 'c19'),
        exact: true
      },
      {
        path: '/Maps/',
        component: ComponentCreator('/Maps/', '8e3'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/Reference Library/references',
        component: ComponentCreator('/Reference Library/references', 'c49'),
        exact: true,
        sidebar: "beSidebar"
      },
      {
        path: '/Style Guide/oktoberfest',
        component: ComponentCreator('/Style Guide/oktoberfest', '34e'),
        exact: true,
        sidebar: "beSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
