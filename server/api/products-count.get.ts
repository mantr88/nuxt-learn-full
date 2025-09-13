let productCount = 0;

export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    }, 2000);
  });
});
