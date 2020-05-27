import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
      <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>

            <Link to={`/users/${user.username}`} className="user__name">{user.name}</Link>
          </div>

          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed" />
        </div>
      </div>
      {story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video
              autoPlay
              className="video-player"
              loop
              playsInline
              src={story.videoUrl}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default Story;
