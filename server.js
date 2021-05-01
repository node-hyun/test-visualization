//  1. 필요한 모듈들을 require 한다.
var http = require("http"),//웹서버를 실하는 역활을 하는 http 모듈
    express = require("express"),//MVC 패턴을 쉽게 구현해주는 express 모듈
    path = require("path"),//경로 설정시 유용하게 해주는 path 모듈
    app = express();

var routes = require("./routes");

app.set("views", path.join(__dirname, "views"));


app.use('/public', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/inflern_example', express.static(__dirname + '/inflern_example'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/",routes);


http.createServer(app).listen(5000,"localhost");
console.log("startion....5000");