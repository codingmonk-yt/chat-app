import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Fab } from '@mui/material';

// ----------------------------------------------------------------------

const FabButtonAnimate = forwardRef(({ color = 'primary', size = 'large', children, sx, sxWrap, ...other }, ref) => {
  const theme = useTheme();

  if (color === 'default' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return (
      <AnimateWrap size={size} sxWrap={sxWrap}>
        <Fab ref={ref} size={size} color={color} sx={sx} {...other}>
          {children}
        </Fab>
      </AnimateWrap>
    );
  }

  return (
    <AnimateWrap size={size} sxWrap={sxWrap}>
      <Fab
        ref={ref}
        size={size}
        sx={{
          boxShadow: theme.customShadows[color],
          color: theme.palette[color].contrastText,
          bgcolor: theme.palette[color].main,
          '&:hover': {
            bgcolor: theme.palette[color].dark
          },
          ...sx
        }}
        {...other}
      >
        {children}
      </Fab>
    </AnimateWrap>
  );
});

FabButtonAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['inherit', 'default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sx: PropTypes.object,
  sxWrap: PropTypes.object
};

export default FabButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 }
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 }
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 }
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sxWrap: PropTypes.object
};

function AnimateWrap({ size, children, sxWrap }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
        ...sxWrap
      }}
    >
      {children}
    </Box>
  );
}
