import { createRouter, createWebHistory } from 'vue-router';

import TeacherDetail from './pages/teachers/TeacherDetail.vue';
import TeachersList from './pages/teachers/TeachersList.vue';
import TeacherRegistration from './pages/teachers/TeacherRegistration.vue';
import ContactTeacher from './pages/requests/ContactTeacher.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teachers' },
    { path: '/teachers', component: TeachersList },
    {
      path: '/teachers/:id',
      component: TeacherDetail,
      children: [{ path: 'contact', component: ContactTeacher }],
    },
    { path: '/register', component: TeacherRegistration },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
