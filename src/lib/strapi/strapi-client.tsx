import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer a3e73a09895b1fc50aae63a68cf2ed14a8c87eb75df98557986f970312258eb3bf416a38873e103c292ace1af8d9d795d50656e5bdfb5dbe6239c911e5ea6261e09b146f2fc18eb7fb2399d529cfab937c1b810d7d06d2a755e4a51c0217913133bf382993a4f3868530d2494510b6b9fd0c360ad414c489b8320e2dbdf67299`,
    },
  },
});
