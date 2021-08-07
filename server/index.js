
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "qsuEaral",
});

app.post("/create", (req, res) => {
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const email = req.body.email;
  const idnum = req.body.idnum;
  const institution = req.body.institution;
  const department = req.body.department;
  const mobile = req.body.mobile;
  const municipality = req.body.municipality;
  const town = req.body.town;
  const completeadd = req.body.completeadd;


  db.query(
    "INSERT INTO students (lastname, firstname, email, idnum, institution, department, mobile, municipality, town, completeadd) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [lastname,firstname,email,idnum,institution,department,mobile,municipality,town,completeadd],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/astudents", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});