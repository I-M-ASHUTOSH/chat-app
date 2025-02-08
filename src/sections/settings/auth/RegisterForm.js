import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../../components/hook-form/FormProvider';
import { Eye, EyeSlash } from 'phosphor-react';
import {
  InputAdornment,
  IconButton,
  Link,
  Button,
  Stack,
  Alert,
} from '@mui/material';
import { RHFTextField } from '../../../components/hook-form';
import AuthSocial from './AuthSocial';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: 'XXXXXXXXXXXXXXXX',
    password: 'demo1234',
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
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

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
        </Stack>
        <RHFTextField name="email" label="Email" />
        <RHFTextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <RHFTextField name="email" label="Email address" /> */}

        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: 'text.primary',
            color: theme =>
              theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
            '&:hover': 'text.primary',
            color: theme =>
              theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
          }}
        >
          Create account{' '}
        </Button>
      </Stack>
    </FormProvider>
    
  );
};

export default RegisterForm;
