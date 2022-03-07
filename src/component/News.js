import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
     
     
    constructor(){
        super();
        
        this.state={
           articles: [],
           loading:false,
           page:1
           
        }
    }
  async  componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=35f0eea949ff4a6ca34f6e4ddb91784e&page=1";
        let data= await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles})

        }
        handlePreviousClick=async()=>{
           console.log("pre");
           let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=35f0eea949ff4a6ca34f6e4ddb91784e&page=${this.state.page-1}&pageSize=20`;
           let data= await fetch(url);
           let parseData= await data.json();
           console.log(parseData);
           
           this.setState({
               page:this.state.page-1,
               articles:parseData.articles
           })
        
        }
        handleNextClick=async()=>{
           console.log("next");
           let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=35f0eea949ff4a6ca34f6e4ddb91784e&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        
        this.setState({
            page:this.state.page+1,
            articles:parseData.articles
        })
        }
    render() {
        return (
            <div className="container my-3" >
                <h2>Top Headlines</h2>
                
                <div className="row" >
                {this.state.articles.map((element)=>{
                  return  <div className="col-md-4" key={element.url}>
                    <NewsItems  title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}  imageurl={element.urlToImage} newsUrl={element.url}/>


                    </div>
                })}
                    
                    
                
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

                </div>

                
                
            </div>
        )
    }
}

export default News
