import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let urlValue = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=10ef35dd87754e69911a9147e4593f7b&page=1&pageSize=15`
        let data = await fetch(urlValue)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
        console.log(parsedData)
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 15)) {
            window.alert("Thats for Today")
        } else {
            let urlValue = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=10ef35dd87754e69911a9147e4593f7b&page=${this.state.page + 1}&pageSize=15`
            let data = await fetch(urlValue)
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })
            this.setState({ page: this.state.page + 1 })
        }
    }
    handlePreviousClick = async () => {
        let urlValue = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=10ef35dd87754e69911a9147e4593f7b&page=${this.state.page - 1}&pageSize=15`
        let data = await fetch(urlValue)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
        this.setState({ page: this.state.page - 1 })
    }
    render() {
        return (
            <div>

                <div className="container my-3" >
                    <h1 className="text-center" style={{ margin: "30px", marginTop: "90px" }}>Top {this.props.category} Headlines</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {this.state.articles.map((element) => {
                            return <div className="col" key={element.url}>
                                <NewsItem newTitle={element.title ? element.title.slice(0, 50) : " "} descrption={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://i.dailymail.co.uk/1s/2021/12/15/09/51817569-0-image-a-8_1639559726968.jpg"} newsUrl={element.url} />
                            </div>
                        }
                        )}
                    </div>

                </div>
                <div className="container my-3">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
                        {/* <div className="btn-group dropup">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropup
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </div> */}
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / 15)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next</button>
                    </div>

                </div>

            </div>
        )
    }
}
