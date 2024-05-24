import styles from './styles/IconButton.module.css';
import PropTypes from 'prop-types';

function IconButton({ icon, onClick, type = 'button' }) {
  return (
    <button className={styles['icon-button']} onClick={onClick} type={type}>
      {icon}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default IconButton;
