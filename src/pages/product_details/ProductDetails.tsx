/* eslint-disable array-callback-return */
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContextProvider } from "../../utils/global_states/products/ProductsContext";

const ProductDetails = () => {
  const { products }: any = useContext(ProductContextProvider);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "5px 18px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "fantasy",
            color: "dodgerblue",
          }}
        >
          Product Details
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.products
          .filter((i: any) => i.id == id)
          .map((item: any) => {
            return (
              <Box
                key={item.id}
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  alt="product"
                  src={item.thumbnail}
                  height="50%"
                />
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    textDecoration: "underline",
                    margin: "10px 0",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {item.description}
                </Typography>
                <Button
                  onClick={() => navigate("/products")}
                  data-testid="backBtn"
                >
                  back to products
                </Button>
              </Box>
            );
          })}
      </Box>
    </>
  );
};
export default ProductDetails;
