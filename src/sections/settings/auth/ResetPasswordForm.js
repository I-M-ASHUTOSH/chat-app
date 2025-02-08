import { useState } from 'react';
import { Alert, Stack } from '@mui/material';
import RHFTextField from '../../../components/hook-form/RHFTextField';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../../components/hook-form/FormProvider';
import { Button } from '@mui/material';

// import { default } from './FormProvider';
// import {Alert} from "@mui/material";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
  });
  const defaultValues = {
    email: 'XXXXXXXXXXXXXXXX',
  };
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{bgcolor:"text.primary", color:(theme)=> theme.palette.mode === "light"? "common.white" : "grey.800",
        '&:hover':"text.primary",
        color:(theme) => theme.palette.mode === "light"? "common.white" : "grey.800",
      }}>Send Request </Button>

      </Stack>

    </FormProvider>
  );
};

export default ResetPasswordForm;
