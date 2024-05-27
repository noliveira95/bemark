import styles from './styles/InputField.module.css';
import PropTypes from 'prop-types';

function InputField({ label, type = 'text', value, onChange }) {
  return (
    <div className={styles['input-field-container']}>
      <label className={styles['input-label']}>{label}</label>
      <input
        className={styles['input-field']}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
