import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
    },
  },
});
