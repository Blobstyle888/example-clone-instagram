/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { ReactComponent as Activity } from "../images/activity.svg";
import { ReactComponent as Emo } from "../images/emo.svg";

import ButtonIcon from '../components/ButtonIcon'

const ArticleFooter = ({article}) =>{

    let { name, description , likes, viewComment,  history} = article;
    return (
      <div className="flex flex-col">
        <div className="mb-2 px-4">
          <a href="#" className="font-bold text-sm text-black">
            {likes} likes
          </a>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex flex-row">
            <a
              href="#"
              className="font-bold text-sm text-black pr-2 hover:underline"
            >
              {name}
            </a>

            <span className="text-sm text-black">{description}</span>
          </div>
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View All {viewComment} comments
          </a>
          <div className="flex flex-col pt-2">
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <a
                  href="#"
                  className="font-bold text-xs text-black pr-2 hover:underline"
                >
                  Steven Hoffman
                </a>
                <span className="text-xs text-black">Ohh well.</span>
              </div>
              <button>
                <Activity className="p-1" />
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">
                <a
                  href="#"
                  className="font-bold text-xs text-black pr-2 hover:underline"
                >
                  Brennen Wiggins
                </a>
                <span className="text-xs text-black">Good job.</span>
              </div>

              <button>
                <Activity className="p-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="pl-4 mb-2">
          <span className="text-xs text-gray-500">{history} HOURS AGO</span>
        </div>

        <div className="flex flex-row border-t-2 border-gray-100 py-2 px-4 mt-2">
          <div className="pt-2 pb-2 pr-4">
            <ButtonIcon iconSVG={<Emo />} isPadding={false} />
          </div>

          <input
            className="w-full mr-4"
            type="text"
            placeholder="Add a comment..."
          />
          <button type="button" className="font-bold text-sm text-blue-500">
            Post
          </button>
        </div>
      </div>
    );
}

export default ArticleFooter;