import styles from './styles/IconButton.module.css';
import PropTypes from 'prop-types';

function IconButton({ icon }) {
  return <button className={styles['icon-button']}>{icon}</button>;
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default IconButton;
