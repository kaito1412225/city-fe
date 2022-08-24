import "./styles.scss";
import logo from "../../../../assets/ic_city_sport.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import userApi from "../../../../api/userApi";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSentClick = async () => {
    const param = { email: email };
    const respond = await userApi.resetEmail(param);
    console.log(respond);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="arrowBackIcon">
          <IconButton color="primary" aria-label="add to shopping cart">
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="fL">
          <img src={logo} alt="" />
        </div>
        <div className="fR">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <h1>Bạn quên mật khẩu?</h1>
            <Input
              placeholder="Email đăng kí của bạn"
              inputProps={ariaLabel}
              value={email}
              onChange={handleChange}
            />
            <Button
              size="small"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSentClick}
            >
              Gửi
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
