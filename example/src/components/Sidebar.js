/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Sidebar = () => {
  let accountName = "Iris Fernandez";
  let accountName1 = "Iris Fernandez";

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="sticky top-10">
      <div className="flex flex-row items-center content-center justify-between mt-4">
        <img
          className="w-16 rounded-full border-2 border-white block"
          src="https://randomuser.me/api/portraits/men/68.jpg"
          alt="user image"
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col ml-4">
            <span className="font-medium text-sm text-black">
              {accountName1}
            </span>
            <span className="text-sm text-gray-500">{accountName1}</span>
          </div>
          <button
            type="button"
            className="font-medium text-xs text-blue-500 p-2"
          >
            Switch
          </button>
        </div>
      </div>
      <div className="mt-7 mb-4">
        <div className="flex flex-row items-center content-center justify-between">
          <span className="font-bold text-gray-500">Suggestions For You</span>
          <button
            type="button"
            className="font-medium text-xs text-gray-500 p-2"
          >
            See All
          </button>
        </div>

        <div className="flex flex-row items-center content-center py-2">
          <img
            className="w-8 rounded-full border-2 border-white block"
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="user image"
          />
          <div className="flex w-full justify-between">
            <div className="flex flex-col ml-4">
              <span className="font-medium text-sm text-black">
                Heath Garner
              </span>
              <span className="text-xs text-gray-500">New to Instagram</span>
            </div>
            <button
              type="button"
              className="font-medium text-xs text-blue-500 p-2"
            >
              Follow
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center content-center py-2">
          <img
            className="w-8 rounded-full border-2 border-white block"
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="user image"
          />
          <div className="flex w-full justify-between">
            <div className="flex flex-col ml-4">
              <span className="font-medium text-sm text-black">
                Desirae Bass
              </span>
              <span className="text-xs text-gray-500">Follows you</span>
            </div>
            <button
              type="button"
              className="font-medium text-xs text-blue-500 p-2"
            >
              Follow
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center content-center py-2">
          <img
            className="w-8 rounded-full border-2 border-white block"
            src="https://randomuser.me/api/portraits/women/62.jpg"
            alt="user image"
          />
          <div className="flex w-full justify-between">
            <div className="flex flex-col ml-4">
              <span className="font-medium text-sm text-black">
                Jamie Romero
              </span>
              <span className="text-xs text-gray-500">Follows you</span>
            </div>
            <button
              type="button"
              className="font-medium text-xs text-blue-500 p-2"
            >
              Follow
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center content-center py-2">
          <img
            className="w-8 rounded-full border-2 border-white block"
            src="https://randomuser.me/api/portraits/men/84.jpg"
            alt="user image"
          />
          <div className="flex w-full justify-between">
            <div className="flex flex-col ml-4">
              <span className="font-medium text-sm text-black">
                Brittany Hendrix
              </span>
              <span className="text-xs text-gray-500">Follows you</span>
            </div>
            <button
              type="button"
              className="font-medium text-xs text-blue-500 p-2"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <ul className="space-x-0 mb-4">
          <li className="inline-block text-xs text-gray-400">About</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Help</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Press</li>
          <li className="inline-block text-xs text-gray-400 pl-3">API</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Jobs</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Privacy</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Terms</li>
          <li className="inline-block text-xs text-gray-400">Locations</li>
          <li className="inline-block text-xs text-gray-400 pl-3">
            Top Accounts
          </li>
          <li className="inline-block text-xs text-gray-400 pl-3">Hashtags</li>
          <li className="inline-block text-xs text-gray-400 pl-3">Language</li>
        </ul>
        <span className="text-xs text-gray-400">
          © 2021 INSTAGRAM FROM FACEBOOK
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
