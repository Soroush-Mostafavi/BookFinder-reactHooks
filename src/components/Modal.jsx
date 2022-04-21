import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Modal({ closemodal, book }) {
  return (
    <div className="container modal">
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <h4>Title : {book.volumeInfo.title}</h4>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="darkblue"
          >
            Description :
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
              <p className="description">{book.volumeInfo.description}</p>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => closemodal(false)}>
            close
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Modal;
