/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Story = ({ profileImage , accountName}) => {
  return (
    <div className="flex flex-col w-24 items-center">
      <div className="w-16 storyBorder">
        <img
          className="rounded-full border-2 border-white block"
          src={profileImage}
          alt="user image"
        />
      </div>
      <span className="text-xs text-gray-600">{accountName}</span>
    </div>
  );
};

export default Story;