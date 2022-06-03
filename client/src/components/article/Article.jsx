import React from "react";
import "./article.css";
import PropTypes from "prop-types";

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='yth__blog-container_article'>
            <div className='yth__blog-container_article-image'>
                <img src={imgUrl} alt='blog image' />
            </div>
            <div className='yth__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

Article.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Article;
