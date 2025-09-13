// Зберігаємо стан лічильника в localStorage, щоб він зберігався між сесіями
// import {useStorage} from "@vueuse/core";

// export const useCounter = () => useStorage("counter", 0);

// Зберігаємо стан лічильника в cookie, щоб він зберігався між сесіями
import {useCookie} from "#app";

export const useCounter = () => useCookie("counter", {default: () => 0});
