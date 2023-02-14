import { CheckOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContextProvider } from "../../../utils/global_states/cart/CartContext";

const BottomCart = () => {
  const { cart, total }: any = useContext(CartContextProvider);

  return (
    <>
      <Box
        sx={{
          minHeight: "70px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "5px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            textTransform: "uppercase",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Products</Typography>
          <Typography sx={{ fontWeight: "bold" }}>Quantity</Typography>
        </Box>
        {cart.map((item: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
                borderRadius: "5px",
              }}
              key={item.id}
            >
              <Typography sx={{ textDecoration: "underline" }}>
                {item.title}
              </Typography>
              <Typography> {item.quantity}</Typography>
            </Box>
          );
        })}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            borderTop: "1px solid black",
            padding: "10px 0",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} color="primary">
            Total
          </Typography>
          <Typography>{total} Rs</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "20%",
            justifyContent: "space-around",
            border: "0.1px solid grey",
            margin: "5px 0",
            borderRadius: "15px",
            boxShadow: "5px 5px 5px grey",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "3px 3px 3px grey",
            },
          }}
        >
          <Button>
            Checkout <CheckOutlined />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BottomCart;
