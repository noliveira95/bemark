import styles from './styles/AddFolderForm.module.css';
import { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import { createFolder } from '../utils/utils';
import useGetFolderOptions from '../hooks/useGetFolderOptions';
import Dropdown from './Dropdown';

function AddFolderForm() {
  const [folderTitle, setFolderTitle] = useState('');
  const [location, setLocation] = useState('');

  const folders = useGetFolderOptions();

  const handleFolderNameChange = (e) => {
    setFolderTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form className={styles['add-folder-form']}>
      <InputField
        label="Name"
        onChange={handleFolderNameChange}
        value={folderTitle}
      />
      <Dropdown
        label="Location"
        options={folders}
        value={location}
        onChange={handleLocationChange}
        isAddingBookmark={false}
      />
      <Button label="Add Folder" onClick={() => createFolder(folderTitle)} />
    </form>
  );
}

export default AddFolderForm;
