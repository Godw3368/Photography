var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("stylesheet"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/services", function(req, res){
    res.render("services");
});
app.get("/booking", function(req, res){
    res.render("booking");
});
    // SHOW PAGES
app.get("/Weddings", function(req, res){
    res.render("show/weddings");
});
app.get("/Landscapes", function(req, res){
    res.render("show/landscapes");
});
app.get("/Nature", function(req, res){
    res.render("show/nature");
});
app.get("/Newborns", function(req, res){
    res.render("show/newborns");
});
app.get("/Families", function(req, res){
    res.render("show/families");
});

app.listen(process.env.PORT, process.env.IP);