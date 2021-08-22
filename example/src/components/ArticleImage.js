/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { ReactComponent as Activity } from "../images/activity.svg";

const ArticleImage = ({ images }) => {
  let activityLike = React.createRef();

  function onLikeImage() {
    activityLike.current.classList.add("duration-150");
    activityLike.current.classList.add("scale-125");
    setTimeout(() =>{
    activityLike.current.classList.remove("duration-150");
    activityLike.current.classList.remove("scale-125");

    activityLike.current.classList.add("duration-100");
    activityLike.current.classList.add("scale-0");
    },1200)
  }

  return (
    <div className="flex flex-col m-auto relative cursor-pointer">
      <img className="w-full block" src={images} onDoubleClick={onLikeImage} />
      <Activity
        ref={activityLike}
        className="duration-100 scale-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-full fill-current text-white"
      />
    </div>
  );
};

export default ArticleImage;
