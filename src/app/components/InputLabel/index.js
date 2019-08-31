import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function InputLabel({
  className,
  textClassName,
  dataFor,
  label,
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  input,
  disabled
}) {
  return (
    <div className={`column start ${className}`}>
      <label className={`${textClassName} ${styles.inputLabel} m-bottom-1`} htmlFor={dataFor}>
        {label}
      </label>
      <input
        className={`input ${inputClassName}`}
        name={name}
        placeholder={placeholder}
        autocomplete="new-password"
        id={inputId}
        type={inputType}
        {...input}
        disabled={disabled}
      />
    </div>
  );
}

InputLabel.propTypes = {
  dataFor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.shape({}),
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  textClassName: PropTypes.string
};

InputLabel.defaultProps = {
  className: '',
  inputClassName: '',
  placeholder: '',
  textClassName: ''
};

export default InputLabel;
