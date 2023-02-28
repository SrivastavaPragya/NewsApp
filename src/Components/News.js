import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

   static defaultProps={
    county:'in',
    pageSize:8,
    category:'general'
   }

   static propTypes={
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string,
   }
   
    constructor(){
        super();
      this.state={
        articles:[],
        loading:false,
        page:1,
        totalResults:0
      }
    }
    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${this.props.category}&apiKey=0b683404d0d5469a930639cd1793ed24&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        console.log(data);
        let parseData=await data.json()
        console.log(parseData)
        this.setState ({
            articles:parseData.articles,
            totalResults:parseData.totalResults
        })
      
    }



     async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${this.props.category}&apiKey=0b683404d0d5469a930639cd1793ed24&page=1&pageSize=${this.props.pageSize}`
        // let data= await fetch(url);
        // console.log(data);
        // let parseData=await data.json()
        // console.log(parseData)
        // this.setState ({articles:parseData.articles})
        this.updateNews();
     }
        //handleNext= async()=>{
// console.log("next")
// let url=`https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${this.props.category}&apiKey=0b683404d0d5469a930639cd1793ed24&page=${this.state.page+1} pageSize=${this.props.pageSize}`;
// let data= await fetch(url);
// console.log(data);
// let parseData=await data.json()
// console.log(parseData)
// this.setState({
//     page:this.state.page+1

// }) 
//this.setState({page:this.state.page+1});
//this.updateNews()
        
     //  }


//       handlePrevious= async()=>{
//         console.log("previous")
//         let url=`https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${this.props.category}&apiKey=0b683404d0d5469a930639cd1793ed24&page=${this.state.page-1} pageSize=${this.props.pageSize}`;
// let data= await fetch(url);
// console.log(data);
// let parseData=await data.json()
// console.log(parseData)
// this.setState({
//     page:this.state.page-1
// })
//this.setState({page:this.state.page-1});
//this.updateNews()
        
      // }
      fetchMoreData = async () => {
        this.setState({page:this.state.page-1}); const url=`https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${this.props.category}&apiKey=0b683404d0d5469a930639cd1793ed24&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        console.log(data);
        let parseData=await data.json()
        console.log(parseData)
        this.setState ({
            articles: this.state.articles.concat(parseData.articles),
            totalResults:parseData.totalResults
        })
      };


    
  render() {
   
        return (
            <>
              
                    <div className="container">
                        <h2>newsMonkey-Top Headlines</h2>
                        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.lenght!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
            <div className="container"> 
            
         
                         
                    <div className="row">
                        { this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={ element.publishedAt}/>
                            </div>
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                    </div> 

                  
            </>
        )
    
}

}

export default News