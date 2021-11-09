import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Bookcard from './Bookcard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Booklist({ books, setBook, setOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{margin: "40px"}}>
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {books.map((books, index) => (
          <Grid item xs={2} sm={4} md={3} key={index} style={{width: "fit-content"}}>
            <Item style={{textAlign: "center"}}>
                <Bookcard setOpen={setOpen} setBook={setBook} books={books} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}