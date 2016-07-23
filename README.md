This repo is a small React-Babel-Webpack project with 3 pages (user's posts, user's liked pages and posting a status) and facebook authentication.

App based on boilerplate github.com:ruanyf/react-babel-webpack-boilerplate.git

First, you should clone the repo and install the dependencies.

```bash
$ git clone git@github.com:lenchikv/react-babel-webpack.git <yourAppName>
$ cd <yourAppName>
$ npm install
```

Then, launch the boilerplate app.

```bash
$ npm start
```

You should see a new browser tap opening and a page in http://127.0.0.1:8080.

From there, you start to develop your own code in the `app` directory. When you finish coding, use `npm run build` or `npm run deploy` to build the static files.

When committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## License

MIT

Known issues

Given application has problems with page - SDK facebook button iteration:
1. While go through pages in menu button "facebook" dissapears. When updating page it shows again.
2  When authorizing you should go to another page to see updated information