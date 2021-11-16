import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { _id, name, img } = props?.product
    return (
        <>
         
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={`/details/${_id}`}> <Button size="small" color="primary">
                            Add to Cart
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
          
        </>
    );
};

export default SingleProduct;