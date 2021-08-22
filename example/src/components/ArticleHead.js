/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import {ReactComponent as More}  from '../images/more.svg'

const ArticleHead = ({article}) => {
    let { profileImage, name, location } = article;
  return (
    <div className="flex flex-row items-center content-center p-4">
      <img
        className="w-8 rounded-full border-2 border-white block"
        src={profileImage}
        alt="user image"
      />
      <div className="flex w-full justify-between">
        <div className="flex flex-col ml-4">
          <span className="font-medium text-sm text-black">{name}</span>
          <span className="text-xs text-gray-500">{location}</span>
        </div>
        <button type="button" className="font-medium text-xs text-black p-2">
          <More />
        </button>
      </div>
    </div>
  );
};

export default ArticleHead;