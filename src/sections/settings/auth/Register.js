import React from 'react';
import { Typography, Stack ,Link} from '@mui/material';

import {Link as RouterLink} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import AuthSocial from './AuthSocial';

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      
      <Typography varaint='h2'>Get started with Tawwk</Typography>

      <Stack direction={'row'} spacing={0.5}>
        <Typography variant='body2 '>Already have an account?</Typography>
        <Link component={RouterLink} to="/auth/login" variant='subtitle2'>Sign in</Link>
      </Stack>
      {/* Register form */}
      <RegisterForm/>


      <Typography component={"div"} sx={{color:"text.secondary",mt:3,typography:'caption',textAlign:"center"}}>
        {'By signing up I agree to '}
        <Link underline='always' color="text.primary">Terms of service</Link>
        {' and '}
        <Link underline='always' color="text.primary">Privacy policy</Link>
        <AuthSocial></AuthSocial>

      </Typography>
    </Stack>
  );
};

export default Register;
