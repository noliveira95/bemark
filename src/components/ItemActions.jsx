import styles from './styles/ItemActions.module.css';
import PropTypes from 'prop-types';
import EditDialog from './EditDialog';
import { BsTrash } from 'react-icons/bs';

function ItemActions(props) {
  const {
    currentTitle,
    currentUrl,
    isFavorite,
    handleUpdate,
    handleDelete,
    isVisible,
    isFolder = false,
  } = props;
  return (
    <div
      className={`${styles['bookmark-actions']} ${
        isVisible ? styles.visible : ''
      }`}
    >
      <EditDialog
        editButtonStyle={styles['action-button']}
        title={currentTitle}
        url={currentUrl}
        favorite={isFavorite}
        onUpdate={handleUpdate}
        isEditingFolder={isFolder}
      />
      <button className={styles['action-button']} onClick={handleDelete}>
        <BsTrash />
      </button>
    </div>
  );
}

ItemActions.propTypes = {
  currentTitle: PropTypes.string.isRequired,
  currentUrl: PropTypes.string,
  isFavorite: PropTypes.bool,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  isFolder: PropTypes.bool,
};

export default ItemActions;
