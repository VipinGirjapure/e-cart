import {
  Add,
  AddCircle,
  ArrowForwardIos,
  Remove,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContextProvider } from "../../utils/global_states/cart/CartContext";
import { ProductContextProvider } from "../../utils/global_states/products/ProductsContext";
import BottomCart from "../cart/bottom_cart/BottomCart";

const Products = () => {
  const { products }: any = useContext(ProductContextProvider);
  const { handleAddCart, cart, updateCart, removeItem }: any =
    useContext(CartContextProvider);
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 35px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "fantasy",
              textAlign: "center",
              color: "dodgerblue",
            }}
          >
            Products
          </Typography>
          <Box component="a" href="#bottomCart">
            <Badge
              badgeContent={cart.length !== 0 ? cart.length : "0"}
              color="warning"
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCart color="info" sx={{ fontSize: "30px" }} />
            </Badge>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "5px 5%",
          }}
        >
          {products.products && products.length !== 0 ? (
            products.products.map((item: any) => {
              const foundInCart = cart.find((i: any) => i.id === item.id);

              return (
                <Card
                  sx={{
                    width: 300,
                    paddingTop: "4px",
                    margin: "8px",
                    border: "0.1px solid lightgrey",
                  }}
                  key={item.id}
                >
                  <CardMedia
                    sx={{
                      height: 140,
                      backgroundImage: `url(${item.thumbnail})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                    title="product"
                    component="div"
                  />
                  <CardContent sx={{ padding: "5px" }}>
                    <Typography
                      gutterBottom
                      textAlign="center"
                      fontSize="16px"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      sx={{
                        color: "grey",
                        height: "80px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {item.price} Rs.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {!foundInCart && (
                      <Button
                        size="small"
                        onClick={() => handleAddCart(item)}
                        data-testid="addCartBtn"
                      >
                        <AddCircle />
                      </Button>
                    )}
                    {foundInCart && (
                      <Box
                        sx={{
                          width: "150px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{
                            padding: "0",
                            height: "25px",
                            width: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "grey",
                            "& :hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                          }}
                          onClick={() => {
                            foundInCart.quantity !== 1
                              ? updateCart(item, false)
                              : removeItem(item);
                          }}
                          data-testid="decrQty"
                        >
                          <Remove />
                        </Button>
                        <Box>{foundInCart.quantity}</Box>
                        <Button
                          sx={{
                            height: "25px",
                            width: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "grey",
                            "& :hover": {
                              color: "green",
                              cursor: "pointer",
                            },
                          }}
                          onClick={() => updateCart(item, true)}
                          data-testid="incrQty"
                        >
                          <Add />
                        </Button>
                      </Box>
                    )}
                    <Button
                      size="small"
                      onClick={() => navigate(`/details/${item.id}`)}
                      data-testid="details"
                    >
                      <ArrowForwardIos />
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                height: "200px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>
      <Box id="bottomCart">
        <BottomCart />
      </Box>
    </Box>
  );
};

export default Products;
