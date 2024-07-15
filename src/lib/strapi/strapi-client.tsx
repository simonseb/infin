import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer 95e005e3a9fb9de4d73a8018430e4fc2e1fd06d6ae51339ec83e3d3ea94f3a2e65a2a5161af0b3f4a43327d84a2effd75f0b62ce70940e37e8cb6a9ca1dee6e15a6e1b91d9914fb42d407c571bc42fe731166d7167c417f9f33870c87e8351906c28f9d6cee9b45ebc5e40c6b8aa8286116dd957cc1b8802f9c401f9c6d81824`,
    },
  },
});
