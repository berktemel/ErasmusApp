import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/forms',
    name: 'forms',
    component: () => import('../Student/components/FormPage.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../Student/components/CoursesPage.vue')
  },
  {
    path: '/request-course',
    name: 'request-course',
    component: () => import('../Student/components/RequestCourse.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/approved-users',
    name: 'approved-users',
    component: () => import('../Institution/components/ApprovedUsers.vue')
  },
  {
    path: '/pending-users',
    name: 'pending-users',
    component: () => import('../Institution/components/PendingUsers.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/SignupPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/ProfilePage.vue')
  },
  {
    path: '/form-list',
    name: 'form-list',
    component: () => import('../Coordinator/components/FormList.vue')
  },
  {
    path: '/course-approve',
    name: 'course-approve',
    component: () => import('../Coordinator/components/CourseApprove.vue')
  },
  {
    path: '/send-mail',
    name: 'send-mail',
    component: () => import('../Coordinator/components/SendMail.vue')
  },
  {
    path: '/to-do-list',
    name: 'to-do-list',
    component: () => import('../Coordinator/components/ToDoList.vue')
  },
  {
    path: '/unauthorized-access',
    name: 'unauthorized-access',
    component: () => import('../components/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
