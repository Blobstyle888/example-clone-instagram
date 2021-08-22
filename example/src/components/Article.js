import React from "react";

import ArticleHead from "../components/ArticleHead";
import ArticleImage from '../components/ArticleImage'
import ArticleAction from "../components/ArticleAction";
import ArticleFooter from '../components/ArticleFooter'

const Article = () => {

    let articles = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        images:
          "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        images:
          "https://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        images:
          "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
        images:
          "https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        profileImage: "https://randomuser.me/api/portraits/women/59.jpg",
        images:
          "https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 6,
        name: "Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        profileImage: "https://randomuser.me/api/portraits/women/60.jpg",
        images:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        images:
          "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
        images:
          "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        images:
          "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        profileImage: "https://randomuser.me/api/portraits/women/17.jpg",
        images:
          "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "by Cole Sidney Designs",
        location: "New to Instagram",
        likes: "157,918",
        viewComment: "15",
        history: "19",
      },
    ];

  return (
    <>
      {articles.map((article) => (
        <article key={article.name} className="rounded border border-grey-600 mb-6">
          <ArticleHead article={article} />
          <ArticleImage images={article.images} />
          <ArticleAction />
          <ArticleFooter article={article} />
        </article>
      ))}
    </>
  );
};

export default Article;
