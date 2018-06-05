import React from 'react';

const Post = (props) => {
  return(
    <div className="card post">
      <div className="card-body">
        <p>
          {props.postBody}
        </p>
      </div>
    </div>
  )
};

export default Post;
