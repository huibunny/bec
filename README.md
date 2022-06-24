README

bec stands for bunny electron client, which can be used for a solution of desktop when you have a web app.


## create app

```
bash
```

npm init

npm install --save-dev electron

copy the text into package.json

In the [`scripts`](https://docs.npmjs.com/cli/v7/using-npm/scripts) field of your `package.json` config, add a `start` command like so:

```json
{
"scripts":{
"start":"electron ."
}
}
```

npm start


```

```

Create an `index.html` file in the root folder of your project:


```
html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
  </body>
</html>
```


## reference

* [electron quick start](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start)
