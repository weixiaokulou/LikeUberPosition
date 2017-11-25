## LikeUberPosition

### Tech in this project
Front-end: Bootstrap, AngularJS
Back-end:  Express, MongoDB, Node.JS, RESTful API

### Installing
What we need: 
Express
Node.JS

Install Express as our server:

```
npm install -g express
```

Install nodemon so we don't have to refresh manually:

```
npm install -g nodemon
```

### Getting start
Navigate into the project directory:
```
cd LikeUberPosition
```
Start the server:
```
nodemon app.js
```
open the http://localhost:3000
### Usage
This is a simple full-stack web application. The points data are stored in MongoDB (Mlab) and can be fetched with RESTful API. Server is provide by Node.JS server(Express). 
We can ADD,DELETE,UPDATE and READ position(s) like this:

Read
<img width="1276" alt="readpoints" src="https://user-images.githubusercontent.com/14252593/33227999-483580be-d165-11e7-90aa-674f6ec62db5.png">
Check one point
<img width="1266" alt="update and delete" src="https://user-images.githubusercontent.com/14252593/33228020-08cebff2-d166-11e7-99e0-7cf34b5f28d9.png">
Add a point
<img width="1265" alt="addpoint" src="https://user-images.githubusercontent.com/14252593/33228004-924c4304-d165-11e7-9c79-557054101c81.png">

### Database Schema
{ 
 title:String, 
 latitude:String, 
 altitude:String 
}
This data is store in my mlab, if you want to using your own DB, replace the mongoose link in ./app.js

## Authors

* **Rachel Gao** - *Initial work* - [RachelGao](https://github.com/weixiaokulou)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
