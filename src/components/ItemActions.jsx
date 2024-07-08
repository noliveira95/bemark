import styles from './styles/ListItem.module.css';
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
    isVisible = true,
    isFolder = false,
  } = props;

  if (!isVisible) return null;

  return (
    <div className={styles['bookmark-actions']}>
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
