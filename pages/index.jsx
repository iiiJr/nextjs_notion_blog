import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/Card";

// import Footer from "../components/Footer";
import { getDatabase } from "../api/http";


function Blog({blocks, user}) {
  // id, Tag, Published, Description, Cover, Date, Page
  return (
    <div className="container mx-auto max-w-3xl flex flex-col items-center">
      {/* ... 其他组件 ... */}
      <Nav user={user}></Nav>
      <div className="my-6 bg-gray-200 p-4 rounded">
        <Header user={user}></Header>
        <div className="flex-grow">
          {blocks.map((item) => {
            return <Card key={item.id} item={item}></Card>
          })}
        </div>
      </div>
      {/* ... 可能存在的 Footer 组件 ... */}
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