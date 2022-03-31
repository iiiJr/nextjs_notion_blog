import fetch from "node-fetch";
import Link from "next/link";

const user = {
  NOTION_Page_id: `72990f90f3b944de90ff1a6eb6738bd0`,  // 你的页面id
  name: `iiiJr's Blog`,                                 // blog 标题
  intro: `Hi there👋 `,                                 // blog 介绍
  github: `https://github.com/iiiJr`,                   // github 链接
  githubName: `iiiJr`,                                  // github 用户名
};

const NOTION_BLOG_ID =
  process.env.NOTION_BLOG_ID || user.NOTION_Page_id;

export const getDatabase = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export const getPage = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export const getFriendChain = async (data) => {
  const friend = data.find(item => item.Slug === "friend-chain")
  return friend
};



function Blog({blocks ,page, friend, user}) {
  // id, Tag, Published, Description, Cover, Date, Page
  return (
    <div className="container mx-auto max-w-3xl">
      <nav className="navbar">
        <Link href="/" passHref>
          <div className=" navbar-brand cursor-pointer"><span>主页</span></div>
        </Link>
        <Link href="/blog/[slug]" as={`/blog/${friend.Slug}`} passHref>
          <div className=" navbar-brand cursor-pointer"><span>友链</span></div>
        </Link>
      </nav>
      <div className="my-6 bg-gray-200 container mx-auto mb-6 md:my-6 px-4 sm:px-6 justify-center flex-grow max-w-3xl bg-base-200 rounded p-4" >
        <header className="mb-6">
          <div className="Header-img">{page.id}</div>
          <div className="Header-title">{user.name}</div>
          <div className="Header-intro ">{user.intro}</div>
        </header>
        <div>
          {blocks.map((item) => {
            if(item.Published){
              return <div key={item.id} className="cursor-pointer ">
                <Link href="/blog/[slug]" as={`/blog/${item.Slug}`} passHref>
                  <div className=" Blog-card box-border p-4 ">
                    <div className="Blog-card-title">{item.Page}</div>
                    <div className="Blog-card-content">
                      <div className="Blog-card-content-Date">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <div>{item.Date}</div>
                      </div>
                      <div className="Blog-card-content-description">{item.Description}</div>
                        <div className="Blog-card-content-tag">
                          {item.Tag.map((index)=> (
                            <div key={index} className="Blog-card-content-tag-child">
                              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg></div>
                              <div>{index || 'Tag'}</div>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </Link>
              </div>
            }
          })}
        </div>
        <footer className="footer">
          <Link href={user.github} passHref>
            <div className="cursor-pointer">github: {user.githubName}</div>
          </Link>
        </footer>
      </div>
    </div>

  );
}


export async function getStaticProps () {
  const blocks = await getDatabase();
  const page = await getPage();
  const friend = await getFriendChain(blocks);
  return {
    props: {
      blocks,
      page,
      friend,
      user
    }
  }
}
export default Blog;