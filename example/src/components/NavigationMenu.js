/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Activity } from "../images/activity.svg";

import ButtonIcon from '../components/ButtonIcon'

const NavigationMenu = ({profileImage}) => {
  return (
    <ul className="flex space-x-6">
      <li className="flex items-stretch">
        <ButtonIcon iconSVG={<Home />} isPadding={false} />
      </li>
      <li className="flex items-stretch">
        <ButtonIcon iconSVG={<Inbox />} isPadding={false} />
      </li>
      <li className="flex items-stretch">
        <ButtonIcon iconSVG={<Explore />} isPadding={false} />
      </li>
      <li className="flex items-stretch">
        <ButtonIcon iconSVG={<Activity />} isPadding={false} />
      </li>
      <li className="flex items-stretch">
        <button type="button">
          <img
            className="w-6 rounded-full border border-gray-100 shadow-sm"
            src={profileImage}
            alt="user image"
          />
        </button>
      </li>
    </ul>
  );
};

export default NavigationMenu;
