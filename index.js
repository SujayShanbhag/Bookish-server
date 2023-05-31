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
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392344536l/366522.jpg",
          "description": "Holly couldn't live without her husband Gerry, until the day she had to. They were the kind of young couple who could finish each other's sentences. When Gerry succumbs to a terminal illness and dies, 30-year-old Holly is set adrift, unable to pick up the pieces. But with the help of a series of letters her husband left her before he died and a little nudging from an eccentric assortment of family and friends, she learns to laugh, overcome her fears, and discover a world she never knew existed.The kind of enchanting novel with cross-generational appeal that comes along once in a great while, PS, I Love You is a captivating love letter to the world!"
      },
      {
          "id": "2",
          "book_id": "102",
          "name": "The Great Gatsby",
          "author": "F.Scott Fitzgerald",
          "rating": "3.9",
          "price": "Rs. 399",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
          "description": "This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.\r\n\r\nThe Great Gatsby is one of the great classics of twentieth-century literature."
      },
      {
          "id": "3",
          "book_id": "103",
          "name": "Anna Karenina",
          "author": "Leo Tolstoy",
          "rating": "4.1",
          "price": "Rs. 199",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546091617l/15823480._SX318_.jpg",
          "description": "Acclaimed by many as the world's greatest novel, Anna Karenina provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative insight to create some of the most memorable characters in all of literature. Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing the author's own views and convictions.\r\n\r\nThroughout, Tolstoy points no moral, merely inviting us not to judge but to watch. As Rosemary Edmonds comments, 'He leaves the shifting patterns of the kaleidoscope to bring home the meaning of the brooding words following the title, 'Vengeance is mine, and I will repay."
      },
      {
          "id": "4",
          "book_id": "104",
          "name": "Madame Bovary\r\n",
          "author": "Gustave Flaubert",
          "rating": "3.6",
          "price": "Rs. 249",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335676143l/2175.jpg",
          "description": "Emma Bovary is beautiful and bored, trapped in her marriage to a mediocre doctor and stifled by the banality of provincial life. An ardent devourer of sentimental novels, she longs for passion and seeks escape in fantasies of high romance, in voracious spending and, eventually, in adultery. But even her affairs bring her disappointment, and when real life continues to fail to live up to her romantic expectations, the consequences are devastating. Flaubert's erotically charged and psychologically acute portrayal of Emma Bovary caused a moral outcry on its publication in 1857. It was deemed so lifelike that many women claimed they were the model for his heroine; but Flaubert insisted: 'Madame Bovary, c'est moi.'\r\n\r\nThis modern translation by Flaubert's biographer, Geoffrey Wall, retains all the delicacy and precision of the French original. The edition also contains a preface by the novelist Michèle Roberts."
      },
      {
          "id": "5",
          "book_id": "105",
          "name": "War and Peace",
          "author": "Leo Tolstoy",
          "rating": "4.2",
          "price": "Rs. 249",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413215930l/656.jpg",
          "description": "In Russia's struggle with Napoleon, Tolstoy saw a tragedy that involved all mankind. Greater than a historical chronicle, War and Peace is an affirmation of life itself, `a complete picture', as a contemporary reviewer put it, `of everything in which people find their happiness and greatness, their grief and humiliation'. Tolstoy gave his personal approval to this translation, published here in a new single volume edition, which includes an introduction by Henry Gifford, and Tolstoy's important essay `Some Words about War and Peace'."
      },
      {
          "id": "6",
          "book_id": "106",
          "name": "Lolita",
          "author": "Vladimir Nabokov",
          "rating": "3.8",
          "price": "Rs. 349",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377756377l/7604.jpg",
          "description": "Humbert Humbert - scholar, aesthete and romantic - has fallen completely and utterly in love with Lolita Haze, his landlady's gum-snapping, silky skinned twelve-year-old daughter. Reluctantly agreeing to marry Mrs Haze just to be close to Lolita, Humbert suffers greatly in the pursuit of romance; but when Lo herself starts looking for attention elsewhere, he will carry her off on a desperate cross-country misadventure, all in the name of Love. Hilarious, flamboyant, heart-breaking and full of ingenious word play, Lolita is an immaculate, unforgettable masterpiece of obsession, delusion and lust."
      },
      {
          "id": "7",
          "book_id": "107",
          "name": "Middlemarch",
          "author": "George Eliot",
          "rating": "3.9",
          "price": "Rs. 499",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481264628l/19089.jpg",
          "description": "Taking place in the years leading up to the First Reform Bill of 1832, Middlemarch explores nearly every subject of concern to modern life: art, religion, science, politics, self, society, human relationships. Among her characters are some of the most remarkable portraits in English literature: Dorothea Brooke, the heroine, idealistic but naive; Rosamond Vincy, beautiful and egoistic: Edward Casaubon, the dry-as-dust scholar: Tertius Lydgate, the brilliant but morally-flawed physician: the passionate artist Will Ladislaw: and Fred Vincey and Mary Garth, childhood sweethearts whose charming courtship is one of the many humorous elements in the novel's rich comic vein."
      },
      {
          "id": "8",
          "book_id": "108",
          "name": "The Adventures of Huckleberry Finn",
          "author": "Mark Twain",
          "rating": "3.8",
          "price": "Rs. 199",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956.jpg",
          "description": "A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer's aunt who mistakes him for Tom."
      },
      {
          "id": "9",
          "book_id": "109",
          "name": "Moby-Dick",
          "author": "Herman Melville",
          "rating": "3.5",
          "price": "Rs. 349",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327940656l/153747.jpg",
          "description": "So Melville wrote of his masterpiece, one of the greatest works of imagination in literary history. In part, Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. But more than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author's lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is also a profound inquiry into character, faith, and the nature of perception.\r\n\r\nThis edition of Moby-Dick, which reproduces the definitive text of the novel, includes invaluable explanatory notes, along with maps, illustrations, and a glossary of nautical terms. "
      },
      {
          "id": "10",
          "book_id": "110",
          "name": "The Lord of the Rings",
          "author": "J.R.R Tolkien",
          "rating": "4.5",
          "price": "Rs. 499",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547450792l/33.jpg",
          "description": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.\r\n\r\nFrom Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.\r\n\r\nWhen Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.\r\n\r\nThe Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider."
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
  var book={
    success : true
  };
  book["book_data"]=allBooks.data[bookId-101];
  res.json(book);
})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on port 3000");
});
