import React from 'react';
import { render } from 'react-dom';

const ArticleEntry = (props) => {
  const thumbnailNode = props.thumbnail;
  const end = thumbnailNode.indexOf('jpg');
  const thumbnail = thumbnailNode.substring(10, end + 3);
  return (
    <div className='article'>
      <span>{props.title}</span>
      <img src={thumbnail} />
      {props.audio.map((audio, index) => {
        return (
          <audio controls preload='none' key={index}>
            <source src={audio.url}/>
          </audio>
        )
      })}
    </div>
  )
};

export default ArticleEntry;
