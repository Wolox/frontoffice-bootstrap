import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Picker({
  className,
  textClassName,
  dataFor,
  label,
  inputClassName,
  placeholder,
  inputId,
  inputType,
  input,
  disabled,
  field
}) {
  const parsedValue = moment(field.value).format('YYYY-MM-DD');
  return (
    <div className={`column start ${className}`}>
      <label className={`${textClassName} m-bottom-1`} htmlFor={dataFor}>
        {label}
      </label>
      <input
        className={`input ${inputClassName}`}
        name={field.name}
        placeholder={placeholder}
        autoComplete="new-password"
        id={inputId}
        type={field.type || inputType}
        {...input}
        disabled={disabled}
        {...field}
        value={parsedValue}
      />
    </div>
  );
}

Picker.propTypes = {
  className: PropTypes.string,
  dataFor: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  input: PropTypes.shape({}),
  inputClassName: PropTypes.string,
  inputId: PropTypes.string,
  inputType: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  textClassName: PropTypes.string
};

Picker.defaultProps = {
  className: '',
  inputClassName: '',
  placeholder: '',
  textClassName: ''
};

export default Picker;
