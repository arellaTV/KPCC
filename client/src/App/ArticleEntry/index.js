import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

const ArticleEntry = (props) => {
  const thumbnailNode = props.article.thumbnail;
  const end = thumbnailNode.indexOf('jpg');
  const thumbnail = thumbnailNode.substring(10, end + 3);
  const relativeTime = moment(props.article.published_at).fromNow();

  return (
    <div className='article'>
      <div className='thumbnail'
            style={{background: `url("${thumbnail}") center / cover`}}>
      </div>
      <div className='article-body'>
        <div className='relative-time'>{relativeTime}</div>
        <div className='title'>{props.article.title}</div>
        <div className='byline'>{props.article.byline}</div>
        {props.article.audio.map((audio, index) => {
          return (
            <audio className='audio' controls preload='none' key={index}>
              <source src={audio.url}/>
            </audio>
          )
        })}
      </div>
    </div>
  )
};

export default ArticleEntry;
