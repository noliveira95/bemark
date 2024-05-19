import styles from './styles/Checkbox.module.css';
import PropTypes from 'prop-types';

function Checkbox({ label, checked, onChange }) {
  return (
    <div className={styles['checkbox-container']}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className={styles['checkbox-label']}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
