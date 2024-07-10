import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer 2b743e324b8f66f4cc1ef6bc3fd2b6e2b4bb95033c9c5380dc108d054c2dfe30c941565442428156c4b1c14f6716944268ac4784364b35b60859872211fabe7802cfa6879875189be2054515a472398353209a08c77dcf561cb1613955447690480261fe7e323418461b7aca05a1086b92eedf3af438591d3f2a93258017100a`,
    },
  },
});
