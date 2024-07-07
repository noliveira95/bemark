import styles from './styles/EditDialog.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Dialog from '@radix-ui/react-dialog';
import { BsX, BsPencil } from 'react-icons/bs';

function EditDialog({
  editButtonStyle,
  title,
  url,
  favorite,
  onUpdate,
  isEditingFolder = false,
}) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleSave = () => {
    onUpdate(currentTitle, currentUrl, isFavorite);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={editButtonStyle}>
          <BsPencil />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            {isEditingFolder ? 'Edit Folder' : 'Edit Bookmark'}
          </Dialog.Title>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="title">
              Title
            </label>
            <input
              className={styles.Input}
              id="name"
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </fieldset>
          {!isEditingFolder && (
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="url">
                URL
              </label>
              <input
                className={styles.Input}
                id="username"
                value={currentUrl}
                onChange={(e) => setCurrentUrl(e.target.value)}
              />
            </fieldset>
          )}
          {!isEditingFolder && (
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="favorite">
                Favorite
              </label>
              <input
                type="checkbox"
                id="favorite"
                style={{ appearance: 'auto' }}
                checked={isFavorite}
                onChange={(e) => setIsFavorite(e.target.checked)}
              />
            </fieldset>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <button
                className={`${styles.Button} ${styles.green}`}
                onClick={handleSave}
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <BsX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

EditDialog.propTypes = {
  editButtonStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  favorite: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  isEditingFolder: PropTypes.bool,
};

export default EditDialog;
