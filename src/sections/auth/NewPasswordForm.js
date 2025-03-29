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
  Stack,
} from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ResetPassword } from '../../redux/slices/auth';
import { useSearchParams } from 'react-router-dom';

const NewPasswordForm = () => {
  const [queryParams] = useSearchParams();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // use Yup - famouse validator
  // password simmilerity check logic with yup
  const NewPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), ''], 'Password must match'),
  });

  const defaultValues = {
    password: '',
    passwordConfirm: '',
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

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      dispatch(ResetPassword({ ...data, token: queryParams.get('token') }));
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

        <RHFTextField
          name="password"
          label="New Password"
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
        <RHFTextField
          name="passwordConfirm"
          label="Confirm Password"
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
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
