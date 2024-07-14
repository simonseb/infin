import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer 6419ed8bb2dbdbd72e60a89e3f1567e839789244b9967d8465241d6fda660684c974d2fafa1867185a74f9cc59a8db8a976e88cc2321db2538ab949a72bfcc2098f0a67747150e32eecf4552765f2c93c1b8f7b71696db128ae1933fd52b37503752fd7879efd7eea9b18d12ea40d2c4e2f90363e8394851095f86ed17d02307`,
    },
  },
});
