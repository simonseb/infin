import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer 7b0c8fa3191f9ad84ba133cc46c9eae7f199dfdb2d9e7b9e6a5f9929ca79b9f7d8443ac36edd0efe4c095e093d9f9caf41f75a88162cb8299627ae98988745b28312d1933365d19188354e589edb0ae46404c1fd014c037615fe6c5196b9f7ad6d1749934a49eea85a2abdde75a037b9b29d78c89506152f3760c7531c0f8044`,
    },
  },
});
