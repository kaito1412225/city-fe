import React from "react";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";
import logo from "../../../../assets/ic_city_sport.png";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const uidb64 = searchParams.get("uidb64");

  return (
    <div className="container">
      <div className="content">
        <div className="fL">
          <img src={logo} alt="" />
        </div>
        <div className="fR">
          <Stack spacing={2}>
            <h1>Cập nhật mật khẩu mới</h1>
            <TextField
              id="outlined-textarea"
              label="Mật khẩu"
              placeholder=""
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="Xác nhận mật khẩu"
              placeholder=""
              multiline
            />
            <Button color="primary">Cập nhật</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
