import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { invoke } from "../AppServices";
import { useSignUp } from "./Controllers";
import Http from "../../services/HttpServices";

export default function SignUpForm() {
  const navigate = useNavigate();

  const navigateToSignIn = useCallback(() => {
    navigate("/signIn");
  });

  const { data, onChangeValue } = useSignUp();

  const submit = async (data) => {
    const result = await Http.post({
      url: "/signup",
      data,
    });

    // if (result?.message == "success") {
      navigateToSignIn();
      // }
      console.log(">>>. ~ submit ~ result:", result);

  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        spacing={2}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          {/*  <TextField id="outlined-basic"  variant="outlined" type='file' /> */}
          <Avatar alt="Image" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="User"
            variant="outlined"
            onChange={(event) => onChangeValue("name", event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => onChangeValue("email", event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(event) =>
              onChangeValue("enc_password", event.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={async () => await submit(data)} variant="contained">
            SIGN UP
          </Button>
        </Grid>
        <p onClick={navigateToSignIn} style={{ fontStyle: "italic" }}>
          Have an Account ? Click here !
        </p>
      </Grid>
    </Box>
    // </div>
  );
}
