import React from 'react'


import HorizontalScroll from "react-scroll-horizontal";
import Story from './Story'

const Stories = () => {

  let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
    },
    {
      id: 6,
      name: "Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
    },
  ];

  function subString(text){
    if (text.length > 10) {
      text = text.substring(0, 10) + "...";
    }
      return text;
  }
    // if (accountName.length > 10) {
    //   accountName = accountName.substring(0, 10) + "...";
    // }
  return (
    <div className="rounded border border-grey-600 py-4 mb-6">
      <div className="flex stories">
        <HorizontalScroll className="scroll" reverseScroll={true}>
          {users.map((user) => (
            <Story
              key={user.name}
              profileImage={user.profileImage}
              accountName={subString(user.name)}
            />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Stories;