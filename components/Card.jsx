import Link from "next/link";



function Card({item}) {
  return (
    <div className="cursor-pointer ">
      <Link href="/blog/[slug]" as={`/blog/${item.Slug}`} passHref>
        <div className=" Blog-card box-border p-4 ">
          <div className="Blog-card-title">{item.Page}</div>
          <div className="Blog-card-content">
          <div className="Blog-card-content-Date">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <div className="date-text">{item.Date}</div>
          </div>
          <div className="Blog-card-content-description">{item.Description}</div>
            <div className="Blog-card-content-tag">
              {item.Tag.map((tag, index) => (
                <div key={index} className="Blog-card-content-tag-child">
                  <svg className="tag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div>{tag || 'Tag'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card;