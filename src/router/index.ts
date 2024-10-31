// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// src/router/index.js
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import APPhome from '../App.vue'
// import Sidebar from '@/components/Sidebar.vue'
import BarangForm from '../views/Master/Barang.vue'
// import AppHeader from './components/Header.vue'
// import AppSidebar from './components/Sidebar.vue'
// import APPMainContent from './components/MainContent.vue'
// import FooterComponent from './components/Footer.vue'

const routes = [
  { path: '/', component: APPhome },
  // { path: '/', component: APPMainContent },
  { path: '/Barang', component: BarangForm }
  // {
  //   path: '/',
  //   component: Sidebar,
  //   children: [
  //     {
  //       path: '/Barang',
  //       component: BarangForm
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
