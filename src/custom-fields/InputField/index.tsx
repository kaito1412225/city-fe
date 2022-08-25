import PropTypes from "prop-types";
import React from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage } from "formik";
import { Stack } from "@mui/system";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

interface State {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
}

function InputField(props: {
  field: any;
  form: any;
  type: any;
  label: any;
  placeholder: any;
  disabled: any;
}) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const [values, setValues] = React.useState<State>({
    password: "",
    passwordConfirm: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
        <Input
          id={name}
          disabled={disabled}
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          error={showError}
          {...field}
        />
        <ErrorMessage name={name} component={FormHelperText} />
      </FormControl>
    </Stack>
  );
}

export default InputField;
