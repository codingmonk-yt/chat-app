// ----------------------------------------------------------------------

export default function Tabs(theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          fontWeight: theme.typography.fontWeightMedium,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          '&.Mui-selected': {
            color: theme.palette.text.primary,
          },
          '&:not(:last-of-type)': {
            marginRight: theme.spacing(5),
          },
          '@media (min-width: 600px)': {
            minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: 'row',
          '& > *:first-of-type': {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapped: {
          flexDirection: 'row',
          whiteSpace: 'nowrap',
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}
