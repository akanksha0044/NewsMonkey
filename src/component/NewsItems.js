import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let{title,description,imageurl,newsUrl}=this.props;
        return (
            <div>
            
                <div className="card" style={{width: "18rem"}}>
     <img src={!imageurl?"https://wwwcache.wral.com/asset/weather/2021/11/10/19974668/FD4j85cWUAEi9xJ__1_-DMID1-5sug9ssu1-640x480.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target ="_blank" className=" btn btn-sm btn btn-primary">Read more</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
