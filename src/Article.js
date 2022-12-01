import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import news from './news.json';

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
                <h1>{articleData.title}</h1>
                <p>{articleData.content}</p>
            </article>
        )
    }

    return (
        <div>
            <p>Article not found</p>
        </div>
    )
}