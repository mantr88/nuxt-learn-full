// http://localhost:3015/api/hello
export default defineEventHandler(async (event) => {
  return {message: "Hello Nuxt 3!"};
});
