import { forwardRef, useContext } from 'react';
import styles from './styles/Dropdown.module.css';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { BsFolderPlus } from 'react-icons/bs';
import { ScreenContext } from '../Popup';

const Dropdown = forwardRef((props, ref) => {
  const { label, options, value, onChange, addFolderButton = false } = props;
  const screen = useContext(ScreenContext);
  return (
    <div className={styles['dropdown-container']}>
      <label className={styles['dropdown-label']}>{label}</label>
      <div className={styles['add-folder-row']}>
        <div className={styles['dropdown-wrapper']}>
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
        {addFolderButton && (
          <IconButton
            icon={<BsFolderPlus className={styles['add-folder-icon']} />}
            onClick={() => screen.setScreen('addFolder')}
          />
        )}
      </div>
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
  addFolderButton: PropTypes.bool,
};

export default Dropdown;
