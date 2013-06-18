node-svninfo
============

A NodeJS module which will execute and parse the output of an svn info command.

Example:

```javascript
var svninfo = require('svninfo');

svninfo(function (err, res) {
  if (err)
    console.log(err);  
  else
    console.log(res);
});
```

Output

```
{ rev: '230',
  url: 'https://example.com/svn/test/tree',
  last:
   { rev: '230',
     author: 'Steve',
     date: Tue Jun 18 2013 15:12:10 GMT+0100 (BST) },
  repository:
   { root: 'https://example.com/svn/test',
     id: 'bee123213-cddd-1234-abcd-12342323134' } }
```

Alternate syntax:

```javascript
var svninfo = require('svninfo');

svninfo(callback);
svninfo(path, callback);
svninfo(options, callback);

var options = { 
  cwd: 'path',
  timeout: 10
}
  

```
