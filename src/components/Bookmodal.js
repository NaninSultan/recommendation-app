import { Typography, Button, Card, CardContent, CardActions, Link } from "@mui/material"


const Bookmodal = ({ setOpen, book }) => {


    return (
        <div className="backdrop">
         <Card style={{textAlign: "center", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "fit-content", margin: "10px"}} >
            <CardContent>
                <img
                    height="250"
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Title: {book.volumeInfo.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Publisher: {book.volumeInfo.publisher}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Author: {book.volumeInfo.authors}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Page count: {book.volumeInfo.pageCount}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Average rating: {book.volumeInfo.averageRating}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Ratings count: {book.volumeInfo.ratingsCount}
                    </Typography>
                    <Link href={book.volumeInfo.canonicalVolumeLink}>
                        <Typography style={{cursor: "pointer"}} gutterBottom variant="h5" component="div">
                            Read this book online
                        </Typography>
                    </Link>
                </CardContent>
            </CardContent>
            <CardActions>
                <Button onClick={()=> setOpen(false)} size="small" color="primary">
                    Close
                </Button>
            </CardActions>
        </Card>
        </div>
    )
}

export default Bookmodal;