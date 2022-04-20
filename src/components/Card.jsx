import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cardbook = ({ book }) => {
  return (
      <div className="cardcantainer">
<Card sx={{ backgroundColor:" rgb(146, 134, 134)" ,margin:"20px" }}  >
        <div className="cardimage">
        <img
        height="200"
        width="150"
        src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        alt={`${book.volumeInfo.title} book`}
      />
        </div>
    
      <CardContent sx={{color:"white"}}>
        <Typography gutterBottom variant="h5" component="div">
          <h6 >{book.volumeInfo.title}</h6>
        </Typography>
        <Typography variant="body2" color="text.light">
          <p>{book.volumeInfo.authors}</p>
        </Typography>
        <Typography variant="body2" color="text.light">
         
            <p>{book.volumeInfo.publishedDate}</p>
       
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
    
  );
};

export default Cardbook;
