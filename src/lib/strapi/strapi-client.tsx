import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer b12c09bf33acd351c8818ca3876ecca88ee972cfef00eaf1679d54d94e0cc7314034990b70dc46acca25501d7e80196f9c0a81c677dd219f110a2b73526f50769c6b00c40a9985263ed41ba59a81cb91c8211deb8c31e90aca2e8e4d95f16fa1f6c0ff9c8c8236907fb3ea3614a8da351b95268578dff0ba4234f3c703bad549`,
      Authorization: `Bearer f1866da6c312c8d289d0972c8c691a76f5ac830343dd437f4c6ee834ccc64453c7b619a0097433d4ab627b07fb03856a1c77869be1c7d9610a8e15bfea8fa083410184688c151ded66991053196867b5a4e4e5534c3f05a99eac45ba71a75fd0c2ad1ef87dc4f495b76b66af994f342559cb700627669af0a1fd0297623ee27a`,
    },
  },
});
