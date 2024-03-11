# Writistry

A modern blog platform with Markdown support

![GitHub language count](https://img.shields.io/github/languages/count/gloriousLoaf/Writistry)
![GitHub top language](https://img.shields.io/github/languages/top/gloriousLoaf/Writistry)

## Table of Contents

- [Description](#-description)
- [User Story](#-user-story)
- [Installation](#-installation)
- [Usage](#-usage)
- [Future Development](#-future-development)
- [License](#-license)
- [Tools](#-tools)
- [Questions](#-questions)
<p>&nbsp;</p>

#### Get straight to the business? **Visit** [Writistry](https://writistry.metcalf.dev/)

## 📝 Description

Writistry is a MERN full stack personal blog. This site was built in a day With
React, Redux, CSS libraries, and **supports markdown**. Visitors can view my
blog posts in descending chronological order, and as the owner, I can create new
posts through a custom built admin UI. Additionally, visitors who sign up for an
account get access to quick-launch share-to-Twitter links to pass their favorite
posts along to friends and followes. More member features, suchas likes and
commenting are in development.

<p>&nbsp;</p>

## 😃 User Story

> AS A developer with a story to tell and new knowledge to share,  
> I WANT to log in to my personal blog and spin up a new post on the fly,  
> SO THAT I can quickly share it with the world!

<p>&nbsp;</p>

## 💾 Installation

To start your own instance, clone this repository and run `npm install` from the
root directory. Then `cd client` and run another install to complete the
dependencies. 

I built this app to store data using **MongoDB Atlas** cloud hosting. Please
[see their docs for information](https://docs.atlas.mongodb.com/) regarding
setting up a cluster for this app. You will need to create a `.env` file and
save your MONGO_URI to the file. Authorizing users relies on tokens from node
package [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). When setting
up tokens, remember to drop your JWT_SECRET into the `.env`. Lastly, I utilized
[react-markdown](https://www.npmjs.com/package/react-markdown) to add simple
markdown support. GitHub-flavored markdown and syntax highlighting for code
blocks are in the works for future deployments.

To develop and run the app:

- **Local Instance:** To test and develop locally, open a **Node** enabled
  terminal window, navigate to the root directory and run `npm run dev` to start
  the servers listening and connect to MongoDB. Unless altered, all data will
  hit your cloud database by default. This script tells npm _Concurrently_ to
  start both servers listening at ports 3000 and 5000 respectively. Launch your
  browser, navigate to `localhost:3000` and begin using Writistry!
- **Web Instance:** Connect your MongoDB cloud cluster to you preferred cloud
platform for website hosting. I used **[Render](https://docs.render.com/)**
to deploy this app, go here to checkout 👉
**[Writistry](https://writistry.metcalf.dev/)** in action.
<p>&nbsp;</p>

## 📲 Usage

**Users** start their experience at the landing page, where they can catch a
quick view of the app. A link to the Feed with all blog posts is prominent on
the home page. On the Feed, each post appears as a short teaser card that can be
clicked to view the full post. Sign in & Sign up pages are linked in the
navigation and at the bottom of blog posts for users that are not logged in. The
blog posts will always be available for anyone to read without signing up.
Future fun interactions are planned for members!

**Admins** can publish and update blogs, with delete coming soon. Admins will
remain a private affair for now, but the basic architecture for building this
into a site where users can become authors themselves is in place. Super stretch
goals? 🤔

<p>&nbsp;</p>

## 🔮 Future Development

- **Delete Posts** `!important` Admin priviledge coming _very soon_.
- **Likes, Comments & Bookmarks** For signed up users.
- **GitHub-flavored Markdown & Syntax Highlighting** Because code should be
  pretty.
- **Search** For your favorite post by keyword.
- **UI Improvements** It looks nice now, but could be more eye catching.
<p>&nbsp;</p>

## 📜 License

**MIT** • _(If you fork and recreate this, please be kind and rebrand your
version!)_

<p>&nbsp;</p>

## 🔨 Tools

- [React](https://reactjs.org/), [React-Redux](https://react-redux.js.org/) and
  [React-Bootstrap](https://react-bootstrap.github.io/)
- [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/) and
  [Node](https://nodejs.org/)
- [react-markdown](https://www.npmjs.com/package/react-markdown)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) and
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for authentication
<p>&nbsp;</p>

## ❔ Questions?

- **David Metcalf**
- **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
- <hello@metcalf.dev>

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
<p>&nbsp;</p>

---

##### This markdown was created with [Readme Generator](https://github.com/gloriousLoaf/Readme-Generator)
