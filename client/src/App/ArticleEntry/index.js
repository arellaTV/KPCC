import React from 'react';
import { render } from 'react-dom';

const ArticleEntry = (props) => {
  const thumbnailNode = props.article.thumbnail;
  const end = thumbnailNode.indexOf('jpg');
  const thumbnail = thumbnailNode.substring(10, end + 3);
  return (
    <div className='article'>
      <div className='thumbnail'
            style={{background: `url("${thumbnail}") center / cover`}}>
      </div>
      <div className='article-body'>
        <div className='title'>{props.article.title}</div>
        <div className='byline'>{props.article.byline}</div>
        <div className='audio'>
          {props.article.audio.map((audio, index) => {
            return (
              <audio controls preload='none' key={index}>
              <source src={audio.url}/>
              </audio>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default ArticleEntry;
