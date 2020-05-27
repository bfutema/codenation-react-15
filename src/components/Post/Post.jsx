import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link to={`/users/${userInfo.username}`} className="user__thumb">
              <img src={userInfo.avatar} alt={userInfo.name}/>
            </Link>
            <Link to={`/users/${userInfo.username}`} className="user__name">
              {userInfo.name}
            </Link>
          </div>
          <button className="post__context">
            <span className="follow-btn is-following">{'Seguindo'}</span>
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt=""/>
      </figure>

      {userInfo && (
        <nav className="post__controls">
          <button className="post__control">
            <i className="fas fa-heart" />
          </button>
          <div className="post__status">
            <div className="user">
              <span>curtido por <Link to="/" ></Link> e outra <Link to="/">
               pessoa.
            </Link>
          </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
