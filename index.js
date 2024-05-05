import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  database : "permalist",
  host : "localhost",
  password : "shaheer321",
  user : "postgres",
  port : 5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [ 
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  try{
    const query2 = await db.query("select * from users order by id asc");
    items = query2.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });}
    catch(err){
      console.log(err);
    }
  });

app.post("/add",async (req, res) => {
  const item = req.body.newItem;
  try{
    await db.query("Insert into Users (id,title) values ($1,$2)", [items.length+1,item])
    res.redirect("/");
  }
  catch(err){
   console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE users SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});


app.post("/delete", async (req, res) => {
  const delete_item = req.body.deleteItemId;
  try{
    await db.query ("DELETE FROM USERS WHERE ID = $1 ",[delete_item]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}