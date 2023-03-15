import React from 'react';
import PropTypes from 'prop-types';

const InformationCard = ({ title, description, imageUrl }) => {
  return (
    <div className="information-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

InformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default InformationCard;
