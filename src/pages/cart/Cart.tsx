import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = () => {
  return (
    <Box>
      <Box sx={{ height: "70.3vh" }}>
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
            Cart
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "5px 10%",
          }}
        >
          {/* {myProducts?.map((item: any) => (
          <Card
            sx={{
              width: 330,
              paddingTop: "4px",
              margin: "15px 2px",
              border: "0.1px solid lightgrey",
            }}
            key={item.id}
          >
            <CardMedia
              sx={{
                height: 140,
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              title="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price} Rs.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">
                <AddCircle />
              </Button>
              <Button size="small">
                <ArrowForwardIos />
              </Button>
            </CardActions>
          </Card>
        ))} */}
        </Box>
      </Box>
      <Box
        sx={{
          height: "22vh",
          borderTop: "0.1px solid black",
          paddingTop: "2px",

          //   width: "100%",
        }}
      >
        <Box
          sx={{
            height: "50%",
            display: "flex",
            // width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://blog-cdn.reedsy.com/directories/admin/featured_image/335/large_how-to-become-a-writer-a62ec9.jpg"
            height="100%"
          />
          <Typography>Iphone</Typography>
          <Typography>1000 Rs.</Typography>
          <Box
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button>
              <RemoveIcon
                sx={{
                  fontSize: "15px",
                }}
              />
            </Button>
            1
            <Button>
              <AddIcon />
            </Button>
            <DeleteIcon sx={{ color: "tomato", fontSize: "28px" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid grey",
          }}
        >
          <Typography>Check Out</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>Total Items</Typography>
            <Typography>7</Typography>
          </Box>
          <Box>
            <Typography>Total Price</Typography>
            <Typography>1000 Rs</Typography>
          </Box>
          <Button>CheckOut</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
