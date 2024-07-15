import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer daddce2c8aeecec846b5a794ef3cafdd50ca159bacd5b1f7a6cd4a5e96eddefd389f19f5eeaaf52fdd95dd8ea50368a3b362cde512c6ade6a3e01434770d80ad8c6402691f3eb46742eebad2b274e46cbdb7b7b06d38cb8e9a52ceabbcaac68f779674b7bd9cb600480f82ca8263aec3a0f0b579822fb5ea5aa6a0cfb9e41c69`,
    },
  },
});
