import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { _id, productName, weight, image, price, brand } = props?.product

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {brand}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            {productName}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            <h6>Price: $ {price}</h6>
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            <h6>Weight: {weight} g {price}</h6>
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