import React from 'react';
import { render } from 'react-dom';

const ArticleEntry = (props) => {
  const thumbnailNode = props.thumbnail;
  const end = thumbnailNode.indexOf('jpg');
  const thumbnail = thumbnailNode.substring(10, end + 3);
  return (
    <div className='article'>
      <div className='thumbnail'
            style={{background: `url("${thumbnail}") center / cover`}}>
      </div>
      <div className='content'>
        <div className='title'>{props.title}</div>
        <div className='audio'>
          {props.audio.map((audio, index) => {
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
