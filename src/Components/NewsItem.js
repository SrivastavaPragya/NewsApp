import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem=(props)=>{


  
  let  {title,description,imageUrl,newsUrl,author,date}=props;
    return (
      <div>
    <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small  class=" text-muted"> By{author} on {date}</small></p>
    <a href={newsUrl} className="btn  btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
