import styles from './styles/AddFolderForm.module.css';
import { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import { createFolder } from '../utils/utils';

function AddFolderForm() {
  const [folderName, setFolderName] = useState('');

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  return (
    <form className={styles['add-folder-form']}>
      <InputField
        label="Folder Name"
        onChange={handleFolderNameChange}
        value={folderName}
      />
      <Button label="Add Folder" onClick={() => createFolder(folderName)} />
    </form>
  );
}

export default AddFolderForm;
