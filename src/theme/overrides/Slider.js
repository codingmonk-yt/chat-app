// ----------------------------------------------------------------------

export default function Slider(theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },

      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
        valueLabel: {
          borderRadius: 8,
          backgroundColor: theme.palette.grey[isLight ? 800 : 700],
        },
      },
    },
  };
}
