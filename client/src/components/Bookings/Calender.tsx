import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const Calender = (): JSX.Element => {
  const [date, changeDate] = useState<Date | null>(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={(newDate) => {
          changeDate(newDate);
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Calender;
