import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "./Controllers";
import { invoke } from "../AppServices";
import Http from "../../services/HttpServices";

export default function SignInForm() {
  const navigate = useNavigate();

  const navigateToSignUp = useCallback(() => {
    navigate("/signUp");
  });

  const { data, onChangeValue } = useSignIn();

  const submit = async (data) => {
    const result = await Http.post({
      url: "/signin",
      data,
    });

    console.log(">>>> ~ submit ~ result:", result);
    if (result?.message == "success") {
      navigate("/home");
    }

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
          <Button variant="contained" onClick={ () => submit(data)}>SIGN IN</Button>
        </Grid>
        <p onClick={navigateToSignUp} style={{ fontStyle: "italic" }}>
          Don't have a Account ? Click here !
        </p>
      </Grid>
    </Box>
    // </div>
  );
}
