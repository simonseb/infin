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
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return res.json();
};
