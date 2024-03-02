import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("accessToken");

  if (token.value) {
    authenticated.value = true; 
  }

  
  if (token.value && to?.name === "login") {
    return navigateTo("/admin");
  }

  
  if (!token.value && to?.name !== "login") {
    abortNavigation();
    return navigateTo("/login");
  }
});