import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from '@mui/material';
import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormProvider,
  RHFAutoComplete,
  RHFTextField,
} from '../../components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// TODO - create reusable component
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const newGroupSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    members: Yup.array().min(2).required('At least 2 members required'),
  });
  const defaultValues = { title: '', members: [] };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(newGroupSchema),
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" sx={{ mt: 1 }} />
        <RHFAutoComplete
          name={'members'}
          label={'Members'}
          multiple
          freeSolo
          options={['John Doe', 'Jane Smith']}
          chipProps={{ size: 'medium' }}
        />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          alignItems={'center'}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="xs"
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      {/* title */}
      <DialogTitle sx={{ mb: 4 }}>Create a group</DialogTitle>
      {/* content */}
      <DialogContent>
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
