import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          padding: "9px 8px",
          backgroundColor: "dodgerblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "fantasy",
          textTransform: "capitalize",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            paddingLeft: "52px",
          }}
        >
          <Typography
            sx={{
              height: "35px",
              fontSize: "22px",
              fontWeight: "bolder",
              color: "#ed6c02",
              backgroundColor: "white",
              fontFamily: "fantasy",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            E-Cart
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "18px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Offers
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            collection
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            about
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            contact us
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
