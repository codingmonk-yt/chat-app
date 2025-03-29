import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Alert, Button, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { useDispatch } from 'react-redux';
import { ForgotPassword } from '../../redux/slices/auth';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  // use Yup - famouse validator
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email'),
  });

  const defaultValues = {
    email: 'demo@talk.com',
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

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      // email : ""
      dispatch(ForgotPassword(data));
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
          Send Request
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordForm;
