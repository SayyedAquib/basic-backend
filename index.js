require('dotenv').config()
const express = require("express");
const app = express();
const port = 8000;

const gitHubData = {
  login: "SayyedAquib",
  id: 72184419,
  node_id: "MDQ6VXNlcjcyMTg0NDE5",
  avatar_url: "https://avatars.githubusercontent.com/u/72184419?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SayyedAquib",
  html_url: "https://github.com/SayyedAquib",
  followers_url: "https://api.github.com/users/SayyedAquib/followers",
  following_url:
    "https://api.github.com/users/SayyedAquib/following{/other_user}",
  gists_url: "https://api.github.com/users/SayyedAquib/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SayyedAquib/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/SayyedAquib/subscriptions",
  organizations_url: "https://api.github.com/users/SayyedAquib/orgs",
  repos_url: "https://api.github.com/users/SayyedAquib/repos",
  events_url: "https://api.github.com/users/SayyedAquib/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SayyedAquib/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Sayyed Aquib",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: null,
  twitter_username: null,
  public_repos: 52,
  public_gists: 1,
  followers: 4,
  following: 12,
  created_at: "2020-10-01T05:21:35Z",
  updated_at: "2024-11-12T14:06:03Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Us");
});

app.get("/login", (req, res) => {
    res.send("Please login...");
});

app.get("/html", (req, res) => {
    res.send("<h1>HTML Page</h1>");
})

app.get("/json", (req, res) => { 
    res.json(gitHubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port} & ${process.env.PORT}!`);
});
