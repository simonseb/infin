import Strapi from 'strapi-sdk-js';

export const strapi = new Strapi({
  url: process.env.STRAPI_URL,
  // url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer 50afac2339bf07d6dfe1021bafb1c99c1923932d9d830c75afc528bae7d8db28b3c95c0c9c3a65b2c18ee102ba2c2a866e9aacd09795eb885499acabf94622a3701a51efb39766cd96fdc95b894a4cd55f1ef99826ee4104d9d48173fd3af4e7416b73f81cff36d813818db51f14a5f6bdf4f14d9084deeaab7c511491f51463`,
      Authorization: `Bearer 95e005e3a9fb9de4d73a8018430e4fc2e1fd06d6ae51339ec83e3d3ea94f3a2e65a2a5161af0b3f4a43327d84a2effd75f0b62ce70940e37e8cb6a9ca1dee6e15a6e1b91d9914fb42d407c571bc42fe731166d7167c417f9f33870c87e8351906c28f9d6cee9b45ebc5e40c6b8aa8286116dd957cc1b8802f9c401f9c6d81824`,
    },
  },
});
