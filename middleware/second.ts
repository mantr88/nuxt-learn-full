export default defineNuxtRouteMiddleware((to, from) => {
  // Your authentication logic here
  console.log("This is second middleware:", to);
  1;
});
