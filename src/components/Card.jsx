import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";

const Cardbook = ({ book }) => {
  const [openmodal, setOpenmodal] = useState(false);
  const Date = book.volumeInfo.publishedDate


 
  
 

  return (
    <div className="cardcantainer">
      <Card
        className="card"
        sx={{ backgroundColor: " rgb(146, 134, 134)", marginLeft: "70px" }}
      >
        <div className="cardimage">
          <div className="modal-des">
            {openmodal && <Modal closemodal={setOpenmodal} book={book} />}
          </div>
          <button onClick={() => setOpenmodal(true)}>
            <img
              height="200"
              width="150"
              src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              alt={`${book.volumeInfo.title} book`}
            />
          </button>
        </div>

        <CardContent sx={{ color: "white" }} className="cardinfo">
          <Typography gutterBottom variant="h6" component="div">
            <h6 style={{ height: "30px" }}>{book.volumeInfo.title}</h6>
          </Typography>
          <Typography variant="body2" color="text.light">
            <p>{book.volumeInfo.authors}</p>
          </Typography>
          <Typography variant="body2" color="text.light">
            <p>{Date}</p>
          </Typography>
        </CardContent>
    
      </Card>
    </div>
  );
};

export default Cardbook;
