import { NotionRenderer } from "react-notion";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { getDatabase } from '../../api/http';
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


const BlogPost = ({ item, blocks}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div className="container mx-auto max-w-3xl" >
      <Nav title={item.Page}></Nav>
      <div className="my-6 bg-gray-200 container mx-auto mb-6 md:my-6 px-4 sm:px-6 justify-center flex-grow max-w-3xl bg-base-200 rounded p-4" >
        <div className="Blog-card box-border p-4" >
          <h1>{item.Page}</h1>  
          <NotionRenderer 
          blockMap={blocks}
          darkMode={true} />
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default BlogPost;