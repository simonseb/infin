import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  // url: process.env.STRAPI_URL,
  url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer a6cf6f52fd07610dd29968028af4543d7aadd8c461a5f82440e3ba4f21033a18e56dbc4acd9f41fb70f605302e5a7432c378f843bd15d24248a99fe8010bbe0ab0f0415e18a366fe8f9596e8a3f00e8cc5b9595aa701e8c6f21c073663033dce6734e8292ff297f758e8a9caf470efc030dab5ba20e65d73e38397c2f8877bfd`,
    },
  },
});
