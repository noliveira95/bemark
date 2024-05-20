import { forwardRef } from 'react';
import styles from './styles/Dropdown.module.css';
import PropTypes from 'prop-types';

const Dropdown = forwardRef((props, ref) => {
  const { label, options, value, onChange } = props;
  return (
    <div className={styles['dropdown-container']}>
      <label className={styles['dropdown-label']}>{label}</label>
      <select
        className={styles['dropdown-select']}
        value={value}
        onChange={onChange}
        ref={ref}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
