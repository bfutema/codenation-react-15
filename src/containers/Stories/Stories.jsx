import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profileData = getUserHandler(story.userId);

            return (
              profileData ?
              <button
                key={story.id}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  <img src={profileData.avatar} alt={profileData.name} />
                </div>
              </button>
              : null
            )})
          }
        </div>
      </section>
    </React.Fragment>
  );
};
export default Stories;