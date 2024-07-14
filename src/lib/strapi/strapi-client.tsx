import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer ed18092a1bbf5c468e2c7e4d15843fca89bca04058467894afcfa301ee8d8b12814c9c3435820dbe83426cff1b18f513cd3b0f1e56c8c4105ff6b2d43fd242d60de8211591427b714f8cde51bc8914b5695890d96097f3f288cfdf61e7fc6b4df5c531cf49ce97a70f06957ac96fe327e5e745c64aa0ca0b2599352dee2af835`,
    },
  },
});
