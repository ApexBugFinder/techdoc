// "name": "tech-doc-page-ng-version"
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku

  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    console.log(req.get('host'));
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

const express = require('express');
const app = express();
const path = require('path');
process.env['LOCAL_PORT'] = 8080;
const PORT = process.env.PORT || process.env.LOCAL_PORT;
// app.use(requireHTTPS);
app.use(express.static("dist/techdoc"));

// app.use(express.static(_dirname + 'dist/techdoc'));

app.get('/*', function (req, res) {
  // res.sendFile(path.join(_dirname + '/dist/techdoc/index.html'));
  res.sendFile('index.html', { root: 'dist/techdoc' });
});
app.listen(
  PORT
  ,  function () {
  console.log(`server listening on port ${PORT}`);


});
