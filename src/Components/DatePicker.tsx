import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en-gb';

// Enable timezone support
dayjs.extend(utc);
dayjs.extend(timezone);

// Set default timezone to GMT+7 (Asia/Bangkok is UTC+7)
dayjs.tz.setDefault("Asia/Bangkok");

export const theme = createTheme({
  components: {
    MuiDatePicker: {
      defaultProps: {
        displayWeekNumber: false,
      },
    },
  },
});

type Props = {
  onDateChange: (selectedDate: string) => void; // return string "Tue, 19 Aug 2025"
  disabledDays?: string[]; // e.g. ["Sunday", "Friday"]
};

function DatePicker({ onDateChange, disabledDays = [] }: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setSelectedDate(newValue);
      // Format to "Tue, 19 Aug 2025" in GMT+7
      onDateChange(newValue.tz("Asia/Bangkok").format("ddd, DD MMM YYYY"));
    }
  };

  // Disable specific weekdays
  const shouldDisableDate = (date: Dayjs) => {
    const dayName = date.tz("Asia/Bangkok").format("dddd"); // e.g. "Sunday"
    return disabledDays.includes(dayName);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <ThemeProvider theme={theme}>
        <MUIDatePicker
          
          sx={{ width: "80%", height: "80%", bgcolor: "white"}}
          disablePast
          monthsPerRow={3}
          slotProps={{
            actionBar: { actions: ["today"] },
            textField: { readOnly: true },
          }}
          value={selectedDate}
          onChange={handleDateChange}
          shouldDisableDate={shouldDisableDate}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default DatePicker;
