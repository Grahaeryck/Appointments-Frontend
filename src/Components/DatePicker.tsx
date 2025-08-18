import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';

export const theme = createTheme({
  components: {
    MuiDatePicker: {
      defaultProps: {
        displayWeekNumber: true,
      },
    },
  },
});

type Props = {
    onDateChange: (selectedDate : Dayjs) => void 
};
function DatePicker({onDateChange}: Props) { 
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
    const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if(selectedDate)
        onDateChange(selectedDate);
    };
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
             <ThemeProvider theme={theme}>
                    <MUIDatePicker
                        sx={{ width: '80%', height: '100%' }}
                        disablePast
                        slotProps={{
                            actionBar: {actions: ['today'],},
                            textField: {readOnly: true,},
                        }}
                        value={selectedDate} 
                        onChange={handleDateChange}
                    />
             </ThemeProvider>
        </LocalizationProvider>
      </>
    );
}
export default DatePicker;