import React from 'react';
import { Stack,Typography,Link } from '@mui/material';
import {CaretLeft} from "phosphor-react";

import {Link as RouterLink} from 'react-router-dom';
import ResetPasswordForm from '../../sections/settings/auth/ResetPasswordForm';
const ResetPassword = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography>Forgot your password? </Typography>
      <Typography>
        please enter email associated with your account
      </Typography>

      {/* Reset password form */}
      <ResetPasswordForm/>

      <Link component={RouterLink} to="/auth/login" color={"inherit"} variant="subtitle2" sx={{mt:3 , mx:"auto", alignItems:"center" ,display:"inline-flex"}}>
        <CaretLeft/>
        Return to sign in
        </Link>
    </Stack>
  );
};

export default ResetPassword;
