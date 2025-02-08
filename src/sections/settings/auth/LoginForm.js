import { useState } from 'react';
import { Alert, Stack } from '@mui/material';
import RHFTextField from '../../../components/hook-form/RHFTextField';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../../components/hook-form/FormProvider';
import { EyeSlash, Eye } from 'phosphor-react';
import { InputAdornment, IconButton,Link,Button } from '@mui/material';

// import { default } from './FormProvider';
// import {Alert} from "@mui/material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    email: 'XXXXXXXXXXXXXXXX',
    password: 'demo1234',
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async data => {
    try {
      // submit data to backend
      // navigate(PATH_DASHBOARD.root, { replace: true });
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      

      <RHFTextField name="email" label="Email address" />
      <RHFTextField
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={()=>{setShowPassword(!showPassword)}}>
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Stack>

      <Stack alignItems={"flex-end"} sx={{my:2}}>
        <Link variant='body2' color="inherit" underline='always'>
        Forgot Password?</Link>
      </Stack>
      <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{bgcolor:"text.primary", color:(theme)=> theme.palette.mode === "light"? "common.white" : "grey.800",
        '&:hover':"text.primary",
        color:(theme) => theme.palette.mode === "light"? "common.white" : "grey.800",
      }}>Login </Button>
    </FormProvider>
  );
};

export default LoginForm;
