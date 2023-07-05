import { createTheme } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const muiOverrides = createTheme({
  components: {
    // Name of the component
    MuiPopper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '.9rem',
        },
      },
    },
  },
});


export const CustomWidthTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
	))({
		[`& .${tooltipClasses.tooltip}`]: {
			maxWidth: 303,
		},
	});

