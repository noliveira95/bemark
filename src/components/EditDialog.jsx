import styles from './styles/EditDialog.module.css';
import PropTypes from 'prop-types';
import * as Dialog from '@radix-ui/react-dialog';
import { BsX, BsPencil } from 'react-icons/bs';
// import { updateBookmark } from '../api/bookmarks';

const EditDialog = ({ editButtonStyle, title, url }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={editButtonStyle}>
        <BsPencil />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>Edit profile</Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Make changes to your profile here. Click save when you&apos;re done.
        </Dialog.Description>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input className={styles.Input} id="name" defaultValue={title} />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Username
          </label>
          <input className={styles.Input} id="username" defaultValue={url} />
        </fieldset>
        <div
          style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          <Dialog.Close asChild>
            {/* TODO: Set up save logic */}
            <button
              className={`${styles.Button} ${styles.green}`}
              onClick={() => console.log('Saving...')}
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

EditDialog.propTypes = {
  editButtonStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EditDialog;
