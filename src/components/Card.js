import React from 'react';
import '../assets/scss/_team.scss';
import '../assets/main.css';

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="team-item" style={{ width: "100%" }}>
      <div className="team-items">
        <div className="team-image" style={{ position: "relative", overflow: "hidden" }}>
          <div className="shape-img">
            <img
              src="/assets/img/team/team-shape.png"
              alt="shape"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <img
            className="slide-left"
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div className="social-profile">
            <span className="plus-btn">
              <i className="fas fa-share-alt" />
            </span>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
            </ul>
          </div>
        </div>
        <div className="team-content" style={{ padding: "10px" }}>
          <h3 className="team-title">
            <a href="#">{title}</a>
          </h3>
          {description && (
            <p className="team-desc">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default Card;
