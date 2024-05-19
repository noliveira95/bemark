import styles from './styles/Button.module.css';
import PropTypes from 'prop-types';

function Button({ buttonType = 'primary', label, type = 'button' }) {
  return (
    <button className={`${styles.button} ${styles[buttonType]}`} type={type}>
      {label}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
