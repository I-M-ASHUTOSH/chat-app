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

const NewPasswordForm = () => {
  const [shownewPassword, setShowNewPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmNewPassword] = useState(false);


  const NewPasswordSchema = Yup.object().shape({
    newpassword: Yup.string()
      .min(6, 'password must be atleast 6 character')
      .required('Password is required'),
    confirmpassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('newpassword'), null], 'Passwords must match'),
  });

  const defaultValues = {
    newpassword: '',
    confirmpassword: '',
  };
  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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

        <RHFTextField
          name="newpassword"
          type={shownewPassword ? 'text' : 'password'}
          label="New Password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowNewPassword(!shownewPassword);
                  }}
                >
                  {shownewPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmpassword"
          type={showconfirmPassword ? 'text' : 'password'}
          label="Confirm Password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowConfirmNewPassword(!showconfirmPassword);
                  }}
                >
                  {showconfirmPassword ? <Eye /> : <EyeSlash />}
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
          Submit{' '}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
