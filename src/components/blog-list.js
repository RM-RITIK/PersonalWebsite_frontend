import React, { Component } from "react";
import BlogDataService from "../services/blog.service"
import { GridList } from "@material-ui/core";
import "./blog-list.css"

export default class BlogList extends Component {
    constructor(props){
        super(props);
        this.retrieveArticles = this.retrieveArticles.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            articles: []
        };

    }

    componentDidMount(){
        this.retrieveArticles();
    }

    retrieveArticles(){
        BlogDataService.getAll()
            .then(response => {
                this.setState({
                    articles: response.data.response.data
                });
                console.log(response.data.response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList(){
        this.retrieveArticles();
    }

    render(){
        const { articles } = this.state;
        return(
            <GridList cols={3}>
                {articles && articles.map((article, index) => (
                    <div class="h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative blogCards">
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3 blogHeading">{article.title}</h1>
                    <p class="leading-relaxed mb-3 text-gray-300">{article.body.substring(0, 500)}</p>
                    <a class="text-indigo-500 inline-flex items-center">Read More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>          
                ))}
            </GridList>         
        );
    }
}