import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import news from './news.json';
import './Article.css'

export default function Article() {
    let { articleId } = useParams();
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        news.forEach(article => {
            if (article.articleId === articleId) {
                setArticleData(article);
            }
        });
    }, []);

    if (articleData) {
        return (
            <article>
                <img className="pic2" src={process.env.PUBLIC_URL + '/images/' + articleData.image} alt="zombie"/>
                <h1 className="articleText">{articleData.title}</h1>
                <p className="articleText">{articleData.content}</p>
            </article>
        )
    }

    return (
        <div>
            <p>Article not found</p>
        </div>
    )
}