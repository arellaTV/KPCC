import React from 'react';
import { render } from 'react-dom';

const ArticleEntry = (props) => {
  const createThumbnail = function() {
    return {__html: props.thumbnail};
  }
  return (
    <div className='article'>
      <span>{props.title}</span>
      <div dangerouslySetInnerHTML={createThumbnail()}></div>
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
