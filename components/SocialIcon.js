import React from "react";

const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mx-2">
    <img src={icon} alt="Social Icon" className="w-6 h-6 inline-block" />
  </a>
);

export default SocialIcon;
