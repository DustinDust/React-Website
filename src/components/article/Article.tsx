import React from 'react';
import './article.css';

const Article: React.FC<{ imgSrc: string; date: string; title: string }> = (
  props
) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={props.imgSrc} alt='blog image' />
      </div>
      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Article;
