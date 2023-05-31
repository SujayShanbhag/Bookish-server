const express= require('express');
const bodyParser=require('body-parser');
var app=express()
const allBooks = {
  "success": true,
  "data": [
      {
          "id": "1",
          "book_id": "101",
          "name": "P.S. I love you",
          "author": "Cecelia Ahem",
          "rating": "4.0",
          "price": "Rs. 299",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392344536l/366522.jpg"
      },
      {
          "id": "2",
          "book_id": "102",
          "name": "The Great Gatsby",
          "author": "F.Scott Fitzgerald",
          "rating": "3.9",
          "price": "Rs. 399",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg"
      },
      {
          "id": "3",
          "book_id": "103",
          "name": "Anna Karenina",
          "author": "Leo Tolstoy",
          "rating": "4.1",
          "price": "Rs. 199",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546091617l/15823480._SX318_.jpg"
      },
      {
          "id": "4",
          "book_id": "104",
          "name": "Madame Bovary\r\n",
          "author": "Gustave Flaubert",
          "rating": "3.6",
          "price": "Rs. 249",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335676143l/2175.jpg"
      },
      {
          "id": "5",
          "book_id": "105",
          "name": "War and Peace",
          "author": "Leo Tolstoy",
          "rating": "4.2",
          "price": "Rs. 249",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413215930l/656.jpg"
      },
      {
          "id": "6",
          "book_id": "106",
          "name": "Lolita",
          "author": "Vladimir Nabokov",
          "rating": "3.8",
          "price": "Rs. 349",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377756377l/7604.jpg"
      },
      {
          "id": "7",
          "book_id": "107",
          "name": "Middlemarch",
          "author": "George Eliot",
          "rating": "3.9",
          "price": "Rs. 499",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481264628l/19089.jpg"
      },
      {
          "id": "8",
          "book_id": "108",
          "name": "The Adventures of Huckleberry Finn",
          "author": "Mark Twain",
          "rating": "3.8",
          "price": "Rs. 199",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956.jpg"
      },
      {
          "id": "9",
          "book_id": "109",
          "name": "Moby-Dick",
          "author": "Herman Melville",
          "rating": "3.5",
          "price": "Rs. 349",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327940656l/153747.jpg"
      },
      {
          "id": "10",
          "book_id": "110",
          "name": "The Lord of the Rings",
          "author": "J.R.R Tolkien",
          "rating": "4.5",
          "price": "Rs. 499",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547450792l/33.jpg"
      }
  ]
};


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: "30mb"}));

app.get("/fetch_books",function(req,res){


  // Send the JSON object as the response
  res.json(allBooks);
});

app.post("/get_book",function(req,res){
  const json=req.body;
  var bookId=Number(json.book_id);
  const book=allBooks.data[bookId-101];
  res.json(book);
})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on port 3000");
});
