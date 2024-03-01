const i18next = require("i18next");

// i18next.init({
//   ns: "common",
//   fallbackNS: "common",
//   fallbackLng: "en",
//   lng: "en",
//   resources: {
//     en: {
//       translation: {
//         key: "{{what}} is {{how}}",
//         look: {
//           deeper: "some deep key",
//         },
//       },
//       common: {
//         save: "save",
//         cancel: "Cancel",
//       },
//     },
//     de: {
//       translation: {
//         key: "{{what}} is {{how}}",
//       },
//       common: {
//         save: "Speichern",
//         cancel: "Abbrechen",
//       },
//     },
//   },
// });
i18next.init({
  fallBackLng: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        key: "I am {{- name}}", //escapsolation off
        cake_one: "item",
        cake_two: "two items",
        cake_other: "{{count}} items",
      },
    },
  },
});
const author = {
  name: "Jan",
  github: "jamuhl",
};
i18next.t("key", { name: "<img />" });
// -> "I am Jan"
const ret = i18next.t("cake", { count: 3});
console.log(ret);
