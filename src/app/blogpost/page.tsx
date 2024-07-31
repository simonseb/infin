// // pages/blog.tsx

// 'use client';

// import { useEffect, useState } from 'react';
// import Hero_New from '@/components/organisms/BlogComponents/Hero_New';
// import styles from '../../styles/components/organisms/Blog/BlogPage.module.scss';
// import BottomComponent from '@/components/BottomComponent';
// import LargeImage from '@/components/organisms/LargeImage';
// import Description from '@/components/organisms/BlogComponents/Description';
// import RelatedBlogPosts from '@/components/organisms/BlogComponents/RelatedBlogPosts';
// import { getBlog } from '@/lib/strapi/strapi-fetch';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import useCheckIsMobile from '@/hooks/useCheckIsMobile';
// import mobileImage from '@public/images/Blog/blog-mobile.png';
// import BottomPagination from '@/app/blogpost/BottomPagination';
// import TopPagination from '@/app/blogpost/TopPagination'

// interface IBlogData {
//   attributes?: {
//     blogs: {
//       main: {
//         lastest_date: string;
//         title: string;
//         publisher: string;
//         summary: string;
//         article: string;
//         avata: {
//           data: {
//             attributes: {
//               url: string;
//             };
//           };
//         };
//         mainSection: {
//           data: {
//             attributes: {
//               url: string;
//             };
//           };
//         };
//       };
//       related_posts: {
//         id: string;
//         title: string;
//         publisher: string;
//         summary: string;
//         lastest_date: string;
//         mainSection: {
//           data: {
//             attributes: {
//               url: string;
//             };
//           };
//         };
//         avata: {
//           data: {
//             attributes: {
//               url: string;
//             };
//           };
//         };
//         related_blog_id: string;
//       }[];
//     };
//   };
// }

// interface BlogPageProps {}

// export default function BlogPage({}: BlogPageProps) {
//   const [data, setData] = useState<IBlogData[]>();
//   const [currentBlog, setCurrentBlog] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogsPerPage] = useState(1);

//   const [loading, setLoading] = useState(false);
//   const { isMobile } = useCheckIsMobile();

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(true);
//     }, 200);
//   }, []);

//   const getData = async () => {
//     try {
//       const res: any = await getBlog();
//       res.data.sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id));
//       if (res) {
//         setData(res.data as IBlogData[]);
//       }
//     } catch (err) {}
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   if (!data) {
//     return null;
//   }

//   if (loading === false) {
//     return (
//       <div className={styles.page}>
//         <main className={styles.main}>
//           <div style={{ height: '100vh' }}></div>
//         </main>
//       </div>
//     );
//   }

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     setCurrentBlog((page - 1) * blogsPerPage);
//   };

//   const totalPages = Math.ceil(data.length / blogsPerPage);

//   console.log(currentBlog, "data");
  

//   return (
//     <motion.div
//       key={location.pathname}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className={styles.page}>
//         <main className={styles.main}>
//           <Hero_New />
//           {isMobile ? (
//             <Image
//               src={mobileImage}
//               alt="laugh people"
//               style={{ width: '100%', backgroundSize: 'cover' }}
//             />
//           ) : (
//             <LargeImage
//               sectionName="home-image"
//               mobileImage=""
//               desctopImage={`${data[currentBlog].attributes?.blogs.main.mainSection.data.attributes.url}`}
//               alt="people laugh"
//               scale
//             />
//           )}
//           <TopPagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />
//           {/* <Description data={data} currentBlog={currentBlog} /> */}
//           <RelatedBlogPosts
//             data={data}
//             setCurrentBlog={setCurrentBlog}
//             currentBlog={currentBlog}
//           />
//           <div className={styles.bottomPagination}>
//             <div className={styles.bottomPageCount}>
//               {currentPage} / {data.length}
//             </div>
//             <BottomPagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//         </main>
//         <BottomComponent className={styles.bottomComponent} />
//       </div>
//     </motion.div>
//   );
// }


// pages/blog.tsx

'use client';

import { useEffect, useState } from 'react';
import Hero_New from '@/components/organisms/BlogComponents/Hero_New';
import styles from '../../styles/components/organisms/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';
import Description from '@/components/organisms/BlogComponents/Description';
import RelatedBlogPosts from '@/components/organisms/BlogComponents/RelatedBlogPosts';
import { getBlog } from '@/lib/strapi/strapi-fetch';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mobileImage from '@public/images/Blog/blog-mobile.png';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import BottomPagination from '@/app/blogpost/BottomPagination';
import TopPagination from '@/app/blogpost/TopPagination'

interface IBlogData {
  attributes?: {
    blogs: {
      main: {
        lastest_date: string;
        title: string;
        publisher: string;
        summary: string;
        article: string;
        avata: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        mainSection: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      related_posts: {
        id: string;
        title: string;
        publisher: string;
        summary: string;
        lastest_date: string;
        mainSection: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        avata: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        related_blog_id: string;
      }[];
    };
  };
}

interface BlogPageProps {}

export default function BlogPage({}: BlogPageProps) {
  const [data, setData] = useState<IBlogData[]>();
  const [currentBlog, setCurrentBlog] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const { isMobile } = useCheckIsMobile();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);
  }, []);

  const getData = async () => {
    try {
      const res: any = await getBlog();
      res.data.sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id));
      if (res) {
        setData(res.data as IBlogData[]);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }

  if (loading === false) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ height: '100vh' }}></div>
        </main>
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setCurrentBlog((page - 1) * blogsPerPage);
  };

  const totalPages = Math.ceil(data.length / blogsPerPage);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.page}>
        <main className={styles.main}>
          {isMobile ? (
            <Image
              src={mobileImage}
              alt="people laughing"
              layout="fill"
              objectFit="cover"
            />
          ) : (
              <LargeImage
                sectionName="home-image"
                mobileImage=""
                desctopImage={`${data[currentBlog].attributes?.blogs.main.mainSection.data.attributes.url}`}
                alt="people laugh"
                scale
              >
                <div className={styles.heroContent}>
                <h1>
                  The Impact of Custom <br /> Orthotics on Athletic
                  <br /> Performance
                </h1>
                <p style={{lineHeight:'22px'}}>{data[currentBlog].attributes?.blogs.main.summary}</p>
              </div>
              </LargeImage>
            // <div
            //   className={styles.hero}
            //   style={{
            //     backgroundImage: `url(${data[currentBlog].attributes?.blogs.main.mainSection.data.attributes.url})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     height: '100vh',
            //     color: '#fff',
            //   }}
            // >
            //   <div className={styles.heroContent}>
            //     <h1>
            //       The Impact of Custom <br /> Orthotics on Athletic
            //       <br /> Performance
            //     </h1>
            //     <p>{data[currentBlog].attributes?.blogs.main.summary}</p>
            //   </div>
            // </div>
          )}
          <TopPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <RelatedBlogPosts
            data={data}
            setCurrentBlog={setCurrentBlog}
            currentBlog={currentBlog}
          />
          <div className={styles.bottomPagination}>
            <div className={styles.bottomPageCount}>
              {currentPage} / {data.length}
            </div>
            <BottomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
        <BottomComponent className={styles.bottomComponent} />
      </div>
    </motion.div>
  );
}
