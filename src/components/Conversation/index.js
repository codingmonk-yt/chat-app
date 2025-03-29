import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Header } from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
  const theme = useTheme();
  return (
    <>
      <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
        {/* Chat header */}
        <Header />
        {/*Msg */}
        <Box
          sx={{
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#EFF6FF'
                : theme.palette.background.default,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            flexGrow: 1,
          }}
          overflow={'auto'}
        >
          <Message menu={true} />
        </Box>
        {/* Chat Footer */}
        <Footer />
      </Stack>
    </>
  );
};

export default Conversation;
