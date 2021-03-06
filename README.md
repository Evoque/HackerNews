
# HackerNews [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

> HackerNews created by React

## Presentation
![p0](./video/p0.png)
![p1](./video/p4.png)

> you can also download the video in the `video` folder

## Introduction
This repository contains all resources of the micro project:

#### File Tree

```json
├─proto               # Prototype Design files
├─src                  # Belows are common dva files
└─...
```

## ToDo
- [ ] prototype
  - [x] home page & with pager
  - [x] comment page
  - [x] user page: Login, Profile
- [x] request api (firebase)
- [ ] home page
  - [x] container panel style
  - [x] item panel style
  - [x] grey out readed stories 
  - [ ] ~~vote / unvote:~~ *not find the api*
  - [x] story cache & update
    - [x] use cache story within 30 seconds 
- [ ] ~~comment list page~~, *not find the api*
- [ ] comment detail page
  - [x] header: style, input area, add comment, `like/dislike ?`..
  - [x] comments: item style, render link, collapsible,add comment, show more subcomments
  - [x] subcomments: subitem style, add subcomment, hide
  - [ ] interaction
- [x] user page 
  - [x] login: fake login, *not find the api*
  - [x] profile: self  & other author
  - [x] user cache & update
- [ ] engineering
  - [ ] code splitting
  - [ ] SSR?

## Declaration
The login page doesn't actually work(because not found the login api). Just make sure your `username` is right,  and don't care about password or type anything.

## ?
1. How to detect the user voted or not? the user's `submitted` doesn't contain the voted ids.