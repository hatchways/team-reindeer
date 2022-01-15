import { useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@material-ui/core/TextField';
import { DateProps } from '../../interface/DateProps';

interface Props {
  selectedDates: DateProps;
  handleDates: (data: DateProps) => void;
}

const SelectDate = ({ selectedDates, handleDates }: Props): JSX.Element => {
  const [date, setDate] = useState(selectedDates);

  handleDates(date); //update date state of parent component from date picker

  return (
    <>
      <DatePicker
        label="Start"
        value={date && date.start}
        minDate={new Date()}
        onChange={(newValue) => {
          setDate({ ...date, start: newValue });
        }}
        renderInput={(params) => <TextField variant="outlined" {...params} />}
      />
      <DatePicker
        label="End"
        value={date && date.end}
        minDate={date && date.start}
        onChange={(newValue) => {
          setDate({ ...date, end: newValue });
        }}
        renderInput={(params) => <TextField variant="outlined" {...params} />}
      />
    </>
  );
};

export default SelectDate;
