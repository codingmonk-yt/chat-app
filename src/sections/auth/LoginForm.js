import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/slices/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // use Yup - famouse validator
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'kavindamadhuranga74.2@gmail.com',
    password: '1234',
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

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      dispatch(LoginUser(data));
    } catch (error) {
      console.log('error', error);
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
              <InputAdornment
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <IconButton>{showPassword ? <Eye /> : <EyeSlash />}</IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems={'flex-end'} sx={{ my: 2 }}>
        <Link
          variant="body2"
          to="/auth/reset-password"
          component={RouterLink}
          underline="always"
          sx={{
            '&:hover': {
              color: (theme) =>
                theme.palette.mode === 'light' ? '#454545' : 'grey.800',
            },
          }}
        >
          Forgot password?
        </Link>
      </Stack>
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: 'text.primary',
          color: (theme) =>
            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',

          '&:hover': {
            bgcolor: '#54545400',
            border: 'solid 3px #545454',

            color: (theme) =>
              theme.palette.mode === 'light' ? '#545454' : 'grey.800',
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
};

export default LoginForm;
