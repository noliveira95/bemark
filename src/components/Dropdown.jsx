import styles from './styles/Dropdown.module.css';
import PropTypes from 'prop-types';

function Dropdown({ label, options, value, onChange }) {
  return (
    <div className={styles['dropdown-container']}>
      <label className={styles['dropdown-label']}>{label}</label>
      <select
        className={styles['dropdown-select']}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

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
