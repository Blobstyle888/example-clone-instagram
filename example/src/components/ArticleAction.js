import React from 'react';

import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Activity } from "../images/activity.svg";
import { ReactComponent as Comment } from "../images/comment.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

import ButtonIcon from '../components/ButtonIcon'

const ArticleAction = () =>{
    return (
      <div className="flex flex-row px-4  justify-between">
        <div className="flex flex-row">
          <div className="flex items-stretch p-2">
            <ButtonIcon iconSVG={<Activity />} isPadding={false} />
          </div>
          <div className="flex items-stretch p-2">
            <ButtonIcon iconSVG={<Comment />} isPadding={false} />
          </div>
          <div className="flex items-stretch p-2">
            <ButtonIcon iconSVG={<Inbox />} isPadding={false} />
          </div>
        </div>
        <div className="flex items-stretch p-2">
          <ButtonIcon iconSVG={<Bookmark />} isPadding={false} />
        </div>
      </div>
    );
}

export default ArticleAction;