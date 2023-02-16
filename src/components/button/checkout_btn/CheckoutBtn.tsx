import { PaymentOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
interface IProps {
  total: number;
}
const CheckoutBtn: React.FC<IProps> = ({ total }) => {
  const Razorpay = useRazorpay();
  const handlePayment = useCallback(() => {
    const options: RazorpayOptions = {
      key: "rzp_test_locuRaWt3KL2uf",
      amount: total.toString(),
      currency: "INR",
      name: "E-Cart",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_LBfWoS9cCLiSHB",

      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <Box>
      <Button onClick={handlePayment} data-testid="checkBtn">
        Checkout <PaymentOutlined />
      </Button>
    </Box>
  );
};

export default CheckoutBtn;
