import styles from './styles/AddBookmarkForm.module.css';
import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import InputField from './InputField';
import Button from './Button';
import Dropdown from './Dropdown';
import { getFolderOptions } from '../utils/utils';

function AddBookmarkForm() {
  const [dropdownValue, setDropdownValue] = useState('');
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function fetchFolderOptions() {
      const folderOptions = await getFolderOptions();
      setFolders(folderOptions);
    }

    fetchFolderOptions();
  });

  function handleCategoryChange(event) {
    setDropdownValue(event.target.value);
  }

  return (
    <form className={styles['add-bookmark-form']}>
      <InputField label="Title" value={'title'} onChange={null} />
      <InputField label="URL" value={'url'} onChange={null} />
      <Dropdown
        label="Category"
        options={folders}
        value={dropdownValue}
        onChange={handleCategoryChange}
      />
      <Checkbox label="Favorite" checked={null} onChange={null} />
      <Button label={'Add Bookmark'} />
    </form>
  );
}

export default AddBookmarkForm;
