/* eslint-disable jsx-a11y/img-redundant-alt */
import "./index.css";
import logo from "./images/logo.png";
import profileIcon from "./images/profile.jpg";
import pexels_1 from "./images/pexels1.jpg";

import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { ReactComponent as Explore } from "./images/explore.svg";
import { ReactComponent as Activity } from "./images/activity.svg";
import { ReactComponent as Comment } from "./images/comment.svg";
import { ReactComponent as Emo } from "./images/emo.svg";
import { ReactComponent as Bookmark } from "./images/bookmark.svg";

import HorizontalScroll from "react-scroll-horizontal";

function App() {
  let accountName = "Iris Fernandez";
  let accountName1 = "Iris Fernandez";
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b-2">
        <div className="max-w-screen-lg mx-auto px-4 h-xxl flex flex-row items-center justify-between">
          {/* Logo */}
          <img src={logo} />
          {/* Search input */}
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-54 h-lg p-1 rounded-sm border border-grey-600 focus:border-blue-500"
            />
          </div>
          {/* menu & profile */}
          <ul className="flex space-x-4">
            <li>
              <Home className="icon" />
            </li>
            <li>
              <Inbox className="icon" />
            </li>
            <li>
              <Explore className="icon" />
            </li>
            <li>
              <Activity className="icon" />
            </li>
            <li>
              <img
                width="22"
                class="rounded-full border border-gray-100 shadow-sm"
                src={profileIcon}
                alt="user image"
              />
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="max-w-screen-lg mx-auto px-4 pt-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="rounded border border-grey-600 py-4 mb-6">
                <div className="flex stories">
                  <HorizontalScroll className="scroll" reverseScroll={true}>
                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>

                    <div className="flex flex-col mx-4">
                      <div className="w-16 storyBorder">
                        <img
                          className="rounded-full border-2 border-white block"
                          src={profileIcon}
                          alt="user image"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {accountName}
                      </span>
                    </div>
                  </HorizontalScroll>
                </div>
              </div>
              <article className="rounded border border-grey-600 mb-6">
                {/* Header */}
                <div className="flex flex-row items-center content-center p-4">
                  <img
                    className="w-8 rounded-full border-2 border-white block"
                    src={profileIcon}
                    alt="user image"
                  />
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col ml-4">
                      <span className="font-medium text-sm text-black">
                        {accountName1}
                      </span>
                      <span className="text-xs text-gray-500">
                        New to Instagram
                      </span>
                    </div>
                    <button
                      type="button"
                      className="font-medium text-xs text-black p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Image */}
                <div>
                  <img className="w-full block" src={pexels_1} />
                </div>
                <div className="flex flex-row px-4 justify-between">
                  <div className="flex flex-row">
                    <div className="p-2">
                      <Activity />
                    </div>
                    <div className="p-2">
                      <Comment />
                    </div>
                    <div className="p-2">
                      <Inbox />
                    </div>
                  </div>
                  <div className="p-2">
                    <Bookmark />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-2 px-4">
                    <a href="#" className="font-bold text-sm text-black">
                      157,918 likes
                    </a>
                  </div>
                  <div className="flex flex-col px-4">
                    <div className="flex flex-row">
                      <a
                        href="#"
                        className="font-bold text-sm text-black pr-2 hover:underline"
                      >
                        Iris Fernandez
                      </a>

                      <span className="text-sm text-black">
                        by Cole Sidney Designs
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      View All 12 comments
                    </a>
                    <div className="flex flex-col pt-2">
                      <div className="flex flex-row justify-between items-center">
                        <div className="">
                          <a
                            href="#"
                            className="font-bold text-xs text-black pr-2 hover:underline"
                          >
                            Iris Fernandez
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
                            Iris Fernandez
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
                    <span className="text-xs text-gray-500">19 HOURS AGO</span>
                  </div>

                  <div className="flex flex-row border-t-2 border-gray-100 py-2 px-4 mt-2">
                    <div className="pt-2 pb-2 pr-4">
                      <button type="button">
                        <Emo />
                      </button>
                    </div>

                    <input
                      className="w-full mr-4"
                      type="text"
                      placeholder="Add a comment..."
                    />
                    <button
                      type="button"
                      className="font-bold text-sm text-blue-500"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="hidden lg:block lg:col-span-1 ml-3">
              {/* Profile */}
              <div className="flex flex-row items-center content-center justify-between mt-4">
                <img
                  className="w-16 rounded-full border-2 border-white block"
                  src={profileIcon}
                  alt="user image"
                />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col ml-4">
                    <span className="font-medium text-sm text-black">
                      {accountName1}
                    </span>
                    <span className="text-sm text-gray-500">
                      {accountName1}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="font-medium text-xs text-blue-500 p-2"
                  >
                    Switch
                  </button>
                </div>
              </div>
              {/* Suggestions For You */}
              <div className="mt-7">
                <div className="flex flex-row items-center content-center justify-between">
                  <span className="font-bold text-gray-500">
                    Suggestions For You
                  </span>
                  <button
                    type="button"
                    className="font-medium text-xs text-gray-500 p-2"
                  >
                    See All
                  </button>
                </div>

                <div className="flex flex-row items-center content-center">
                  <img
                    className="w-8 rounded-full border-2 border-white block"
                    src={profileIcon}
                    alt="user image"
                  />
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col ml-4">
                      <span className="font-medium text-sm text-black">
                        {accountName1}
                      </span>
                      <span className="text-xs text-gray-500">
                        New to Instagram
                      </span>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
