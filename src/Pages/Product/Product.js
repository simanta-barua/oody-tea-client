import useFetch from '../../hooks/useFetch';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Container, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Product = () => {
  const [products] = useFetch();
  console.log(products);


  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Typography variant="h4" sx={{ mb: 5 }}>All product</Typography>
        <Container>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              products.map(product => <SingleProduct
                key={product._id}
                product={product}
              />)
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Product;