import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/Card";

// import Footer from "../components/Footer";
import { getDatabase } from "../api/http";


function Blog({blocks, user}) {
  // id, Tag, Published, Description, Cover, Date, Page
  return (
    <div className="container mx-auto max-w-3xl">
      {/* TODO 添加meta title SEO 优化 */}
      <Nav user={user}></Nav>
      <div className="my-6 bg-gray-200 container mx-auto mb-6 md:my-6 px-4 sm:px-6 justify-center flex-grow max-w-3xl bg-base-200 rounded p-4" >
        <Header user={user}></Header>
        <div>
          {blocks.map((item) => {
              return <Card key={item.id} item={item}></Card>
          })}
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>

  );
}


export async function getServerSideProps () {
  const Allblocks = await getDatabase();
  const user = Allblocks.find((t) => t.Slug === 'main');
  const blocks = Allblocks.filter((item) => item.Published);
  return {
    props: {
      blocks,
      user
    }
  }
}
export default Blog;