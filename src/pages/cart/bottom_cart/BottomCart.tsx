import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import CheckoutBtn from "../../../components/button/checkout_btn/CheckoutBtn";
import { CartContextProvider } from "../../../utils/global_states/cart/CartContext";

const BottomCart = () => {
  const { cart, total }: any = useContext(CartContextProvider);

  return (
    <>
      <Box
        sx={{
          minHeight: "70px",
          backgroundColor: "lightgrey",
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
            width: "100%",
            justifyContent: "center",
            textTransform: "uppercase",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              backgroundColor: "white",
              padding: "5px",
              height: "20px",
              width: "60px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            Cart
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "15px 0",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart.map((item: any) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "space-between",
                  borderRadius: "5px",
                  margin: "5px 0",
                }}
                key={item.id}
              >
                <Typography sx={{ textDecoration: "underline" }}>
                  {item.title}
                </Typography>
                <Typography>{item.quantity}</Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
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
            width: "300px",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} color="primary">
            with GST
          </Typography>
          <Typography>{total + (total * 18) / 100} Rs</Typography>
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
          {/* @ts-ignore */}
          <CheckoutBtn total={total + (total * 18) / 100} />
        </Box>
      </Box>
    </>
  );
};

export default BottomCart;
