import styles from './styles/Bookmark.module.css';
import PropTypes from 'prop-types';
import EditDialog from './EditDialog';
import { BsTrash } from 'react-icons/bs';

function ItemActions(props) {
  const { currentTitle, currentUrl, isFavorite, handleUpdate, handleDelete } =
    props;
  return (
    <div className={styles['bookmark-actions']}>
      <EditDialog
        editButtonStyle={styles['action-button']}
        title={currentTitle}
        url={currentUrl}
        favorite={isFavorite}
        onUpdate={handleUpdate}
      />
      <button className={styles['action-button']} onClick={handleDelete}>
        <BsTrash />
      </button>
    </div>
  );
}

ItemActions.propTypes = {
  currentTitle: PropTypes.string.isRequired,
  currentUrl: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ItemActions;
