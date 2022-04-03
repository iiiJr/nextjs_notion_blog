import { NotionRenderer } from "react-notion";

import { getDatabase } from '../index';
// import { getFriendChain } from '../index';
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'

export async function getServerSideProps ({ params }) {
  const items = await getDatabase();
  const Slug = params.slug;
  const item = items.find((t) => t.Slug === Slug);
  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${item.id}`).then((res) => res.json());
  return {
    props: {
     blocks,
     item,
    },
  };
}

// export async function getStaticPaths() {
//   const table = await getDatabase();
//   // const post = posts[0];
//   return {
//     paths: table.map((row) => `/blog/${row.Slug}`),
//     fallback: true,
//   };
// }

const BlogPost = ({ item, blocks}) => {
// const BlogPost = ({ blocks }) => {
  const router = useRouter()
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto max-w-3xl" >
      <Head>
        <title>{item.Page}</title>
        <meta name="Description" content={item.Description}> </meta>
      </Head>
      <nav className="navbar">
        <Link href="/" passHref>
          <div className=" navbar-brand cursor-pointer"><span>主页</span></div>
        </Link>
        <Link href="/blog/[slug]" as={`/blog/friend-chain`} passHref>
          <div className=" navbar-brand cursor-pointer"><span>友链</span></div>
        </Link>
      </nav>
      <div className="my-6 bg-gray-200 container mx-auto mb-6 md:my-6 px-4 sm:px-6 justify-center flex-grow max-w-3xl bg-base-200 rounded p-4" >
        <div className="Blog-card box-border p-4" >
          <h1>{item.Page}</h1>  
          <NotionRenderer 
          blockMap={blocks}
          darkMode={true} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;