var express=require("express")
var app=express()
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
var Genre=require("./models/genre")
var Book=require("./models/books")

 mongoose.connect("mongodb://localhost:27017/bookstore",{useNewUrlParser: true ,useUnifiedTopology: true})
 //app.use(bodyparser.urlencoded({extended:true}));
 app.use(bodyparser.json())

app.get("/",function(req,res){
    res.send("welcome to home page!!")
})


//GENRES get
app.get("/api/genres",function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            console.log(err)
        }
        res.json(genres)
    })
})

//add genre
app.post("/api/genres",function(req,res){
    var genre=req.body;
    Genre.addGenre(genre,function(err,genre){
        if(err){
            console.log(err)
        }
        res.json(genre)
    })
})
//update genre
app.put("/api/genres/:_id",function(req,res){
    var id=req.params._id;
    var genre=req.body;
    Genre.updateGenre(id,genre,{},function(err,genre){
        if(err){
            console.log(err)
            }
           res.json(genre)
    })
})

//delete genre
app.delete("/api/genres/:_id",function(req,res){
    var id=req.params._id;
    Genre.deleteGenre(id,function(err,genre){
        if(err){
            console.log(err)
        }
        res.json(genre)
    })
})


//BOOKS get
app.get("/api/books",function(req,res){
    Book.getBooks(function(err,books){
        if(err){
            console.log(err)
        }
        res.json(books)
    })
})
//get single book
app.get("/api/books/:_id",function(req,res){
    Book.getBookById(req.params._id,function(err,book){
        if(err){
            console.log(err)
        }else{
            res.json(book)
        }
    })
})

//add book
app.post("/api/books",function(req,res){
    var book=req.body;
    Book.addBook(book,function(err,book){
        if(err){
            console.log(err)
        }
        res.json(book)
    })
})
//update book
app.put("/api/books/:_id",function(req,res){
    var id=req.params._id;
    var book=req.body;
    Book.updateBook(id,book,{},function(err,book){
        if(err){
            console.log(err)
        }
        res.json(book)
    })
})

//delete book
app.delete("/api/books/:_id",function(req,res){
    var id=req.params._id;
    Book.deleteBook(id,function(err,book){
        if(err){
            console.log(err)
        }
        res.json(book)
    })
})

#port
 app.listen(process.env.PORT || 3000,"0.0.0.0" , () =>{
    console.log("server started")
})

