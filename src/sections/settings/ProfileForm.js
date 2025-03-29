import React, { useCallback, useState } from 'react';
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

const ProfileForm = () => {
  // use Yup - famouse validator
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    about: Yup.string().required('About is required'),
    avatarUrl: Yup.string().required('Avatar is required').nullable(),
  });

  const defaultValues = {
    name: 'Kavinda Madhuranga',
    about: 'Way to the future',
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (newFile) {
        setValue('avatarUrl', newFile, { showValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      console.log('data', data);
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
          name="name"
          label="Your Name"
          helperText={'This name is visible to everyone in your contacts'}
        />

        <RHFTextField mutiple name="about" label="About" multiline rows={5} />

        <Stack direction={'row'} justifyContent={'end'}>
          <Button
            color={'primary'}
            size={'large'}
            type="submit"
            variant={'outlined'}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
