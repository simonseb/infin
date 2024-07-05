const query = `
  query {
    theInfin {
      id
      name
      slug
      theInfinDetail {
        id
        ... on HeroRecord {
          __typename
          id
          mainTitle
          imageTitle
          description
          buttonText
          isPluses
          smallImage {
            id
            url
          }
        }
      }
    }
  }
`;

const endpoint = 'https://graphql.datocms.com/';

export interface IInfinDetail {
  id: string;
  __typename: string;
  mainTitle: string;
  imageTitle: string;
  description: string;
  buttonText: string;
  isPluses: boolean;

  smallImage: {
    id: string;
    url: string;
  };
}

export interface IDatoCMSData {
  data: {
    theInfin: {
      id: string;
      name: string;
      slug: string;
      theInfinDetail: IInfinDetail[];
    };
  };
}

export interface IDataCMSStrapi {
  data: [];
}

export const fetchDataFromCMS = async (): Promise<IDatoCMSData> => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
    body: JSON.stringify({
      query,
    }),
    next: { revalidate: 1 },
  });

  return res.json();
};

export const fetchDataFromStapi = async (
  url: string,
): Promise<IDataCMSStrapi> => {
  const stapiUrl = `http://127.0.0.1:1337/api/${url}?populate=*`;
  const res = await fetch(stapiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer a97be8e3050257299a2f734c62ba232861214667ae3207ec0aef99aa741b540609bb5e50477ef696903039bf60e5daf0ec4158ae2146f7105fcf74a43805d4511a9f98922aa1035d427f32f9508415b4f6c74efd0837f60ae9861b3c5d7e0aace00bd5524273a8c253a7e8aaa20d61c7b04e3ad78daed228fdbe5de7bf2be8a4`,
    },
  });
  return res.json();
};
