import styles from './styles/AddFolderForm.module.css';
import { useState, useEffect } from 'react';
import InputField from './InputField';
import Button from './Button';
import { createFolder } from '../api/bookmarks';
import useGetFolderOptions from '../hooks/useGetFolderOptions';
import Dropdown from './Dropdown';

function AddFolderForm() {
  const [folderTitle, setFolderTitle] = useState('');
  const [location, setLocation] = useState('');

  const folders = useGetFolderOptions();

  useEffect(() => {
    if (folders.length > 0) {
      setLocation(folders[0].value);
    }
  }, [folders]);

  const handleFolderNameChange = (e) => {
    setFolderTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    const selection = e.target.value;
    if (location !== selection) {
      setLocation(selection);
    }
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
      />
      <div className={styles['button-container']}>
        <Button
          label="Add Folder"
          onClick={() => createFolder(folderTitle, location)}
        />
      </div>
    </form>
  );
}

export default AddFolderForm;
