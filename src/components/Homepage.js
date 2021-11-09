import React, {useState} from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Booklist from './Booklist';
import { Button } from '@mui/material';
import Bookmodal from './Bookmodal';

const Homepage = () => {

    const [input, setInput] = useState('');
    const [books, setBooks] = useState([]);
    const [recButton, setRecButton] = useState(false);
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState();

    

    async function submitHandler (e)  {
        e.preventDefault();
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        .then((result) => {
            setBooks(result.data.items);
            setRecButton(true);     
        }
        )
    };

    console.log(books)

    const recommendClick = () => {
        setOpen(true);
        setBook(books[Math.floor(Math.random()*books.length)]);
    }

    return (
        <>
            <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Book Recommender
                    </Typography>
                    <form onSubmit={submitHandler}>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search titles…"
                        onChange={(e) => {e.preventDefault(); setInput(e.target.value)}}
                        />
                    </Search>
                    </form>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        {recButton && <div style={{textAlign: "center"}}>
            <Button onClick={recommendClick} variant="contained" style={{marginTop: "10px", width: "50%"}}>
                Recommend me a book
            </Button>
            < Booklist setOpen={setOpen} setBook={setBook} books={books} />
        </div>}
            {open && <Bookmodal setOpen={setOpen} book={book} />}
        </>
    )
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default Homepage;