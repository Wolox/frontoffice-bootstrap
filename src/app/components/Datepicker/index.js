import React from 'react';
import { date, func } from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function Picker({ selectedDate, onDateChange }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format="dd/MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: 'start' }}
        onChange={onDateChange}
        maxDateMessage="Date should be not after max date"
      />
    </MuiPickersUtilsProvider>
  );
}

Picker.propTypes = {
  selectedDate: date,
  onDateChange: func
};

export default Picker;
