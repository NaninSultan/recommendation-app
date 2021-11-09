import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardContent } from '@mui/material';

export default function Bookcard({ books, setOpen, setBook }) {

  const detailsClick = () => {
    setOpen(true);
    setBook(books);
  }

  return (
    <Card sx={{ maxWidth: "fit-content" }} style={{border: "none", boxShadow: "none", height: "100%"}} >
      <CardContent>
        <img
          component="img"
          height="fit-content"
          src={books?.volumeInfo?.imageLinks?.thumbnail}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {books.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {books?.searchInfo?.textSnippet}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button onClick={detailsClick} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}