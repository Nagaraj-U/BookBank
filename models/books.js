var mongoose=require("mongoose")

var bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    genres:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
})

var Book=module.exports=mongoose.model("Book",bookSchema)


module.exports.getBooks=function(callback,limit){
    Book.find(callback).limit(limit)
}

module.exports.getBookById=function(id,callback){
    Book.findById(id,callback)
}

module.exports.addBook=function(book,callback){
    Book.create(book,callback)
}

module.exports.updateBook=function(id,book,options,callback){
    var query={_id:id};
    var update={
        name:  book.name,
        genres:book.genres,
        price: book.price,
        description:book.description,
        author:book.author
    }
    Book.findOneAndUpdate(query,update,options,callback);
} 

module.exports.deleteBook=function(id,callback){
    var query={_id:id}
    Book.findOneAndDelete(query,callback)
}
