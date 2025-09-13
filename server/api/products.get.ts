import data from "~/mock/products.json";

export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
