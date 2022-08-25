import React from "react";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";
import logo from "../../../../assets/ic_city_sport.png";
import TextField from "@mui/material/TextField";
import { Button, FormGroup, Stack } from "@mui/material";
import { Formik, Form, FastField, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../../../custom-fields/InputField";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const uidb64 = searchParams.get("uidb64");

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Không được để trống"),
    passwordConfirm: Yup.string().required("Không được để trống"),
  });

  const initialValues = { password: "", passwordConfirm: "" };

  const handleSubmit = (values: any) => {
    console.log(values);
    alert("Form is validated! Submitting the form...");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="fL">
          <img src={logo} alt="" />
        </div>
        <div className="fR">
          <Stack>
            <h1>Cập nhật mật khẩu mới</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps) => {
                // do something here ...
                const { values, errors, touched } = formikProps;
                return (
                  <Form>
                    <FastField
                      name="password"
                      component={InputField}
                      label="Mật khẩu"
                      placeholder=""
                      multiline
                    />
                    <FastField
                      name="passwordConfirm"
                      component={InputField}
                      label="Xác nhận mật khẩu"
                      placeholder=""
                      multiline
                    />
                    <FormGroup>
                      <Button color="primary">Cập nhật</Button>
                    </FormGroup>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
