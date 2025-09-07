export default defineNuxtRouteMiddleware((to, from) => {
  // Your authentication logic here
  console.log("Authenticating route:", to);
  console.log("Navigated from:", from);
  1;
});
