import React from 'react'

 const NewsItem = (props) => {
 
      let {title,description,imageUrl, newsUrl,author,date,source} = props;
           return (
      <div className='my-3'>
        <div className="card">
          <div>
          <h5 className="card-title">{title} <span className="badge rounded-pill bg-danger">{source}
            </span></h5>
            </div>
         <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/CRICKET-IND-ENG-TEST-2_1708181018878_1708181068824.jpg":imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl}  rel="noopener"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
     
    )
  }


export default NewsItem
