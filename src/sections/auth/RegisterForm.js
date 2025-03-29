import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import FormProvider from '../../components/hook-form/FormProvider';
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../redux/slices/auth';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // use Yup - famouse validator
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: 'demo@talk.com',
    password: 'demo1234',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  // on submit functions
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      dispatch(RegisterUser(data));
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name={'firstName'} label="First Name" />
          <RHFTextField name={'lastName'} label="Last Name" />
        </Stack>
        <RHFTextField name={'email'} label="Email" />
        <RHFTextField
          name={'password'}
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
          Create account
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
