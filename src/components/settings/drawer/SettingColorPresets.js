// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Grid, RadioGroup, CardActionArea } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
//
import BoxMask from './BoxMask';

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingColorPresets() {
  const { themeColorPresets, onChangeColor, colorOption } = useSettings();

  return (
    <RadioGroup name="themeColorPresets" value={themeColorPresets} onChange={onChangeColor}>
      <Grid dir="ltr" container spacing={1.5}>
        {colorOption.map((color) => {
          const colorName = color.name;
          const colorValue = color.value;
          const isSelected = themeColorPresets === colorName;

          return (
            <Grid key={colorName} item xs={4}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    bgcolor: alpha(colorValue, 0.08),
                    border: `solid 2px ${colorValue}`,
                    boxShadow: `inset 0 4px 8px 0 ${alpha(colorValue, 0.24)}`,
                  }),
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: colorValue,
                    transform: 'rotate(-45deg)',
                    transition: (theme) =>
                      theme.transitions.create('all', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                      }),
                    ...(isSelected && { transform: 'none' }),
                  }}
                />

                <BoxMask value={colorName} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
