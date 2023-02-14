import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogInContextProvider } from "../../utils/global_states/log_in/LogInContext";

function LogIn() {
  const { alertNote, handleApi, userName, password, resp }: any =
    useContext(LogInContextProvider);
  const navigate = useNavigate();

  useEffect(() => {
    if (resp !== undefined) {
      return navigate("/products");
    } else {
      navigate("/");
    }
  }, [resp]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "dodgerblue",
            }}
          >
            Log In
          </Typography>
        </Box>
        <Box
          sx={{
            height: "60%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            type="text"
            placeholder="Enter user name"
            value={userName}
            data-testid="userName"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "7px",
                  borderColor: "dodgerblue",
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            placeholder="Enter password"
            data-testid="password"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "7px",
                  borderColor: "dodgerblue",
                },
              },
            }}
          />
          <Button
            variant="outlined"
            onClick={handleApi}
            data-testid="submitBtn"
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
              borderColor: "orange",
              ":hover": {
                backgroundColor: "orange",
                borderColor: "white",
              },
            }}
          >
            Submit
          </Button>
          {alertNote}
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "92.3vh",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "90%",
            width: "90%",
            backgroundColor: "dodgerblue",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "52px",
              fontWeight: "bolder",
              color: "white",
              fontFamily: "fantasy",
            }}
          >
            E-Cart
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LogIn;
