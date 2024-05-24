import styles from './styles/AddBookmarkForm.module.css';
import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import InputField from './InputField';
import Button from './Button';
import Dropdown from './Dropdown';
import { getFolderOptions } from '../utils/utils';
import { useRef } from 'react';
import IconButton from './IconButton';

function AddBookmarkForm() {
  const [dropdownValue, setDropdownValue] = useState('');
  const [folders, setFolders] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const dropdownRef = useRef();

  useEffect(() => {
    async function fetchFolderOptions() {
      const folderOptions = await getFolderOptions();
      setFolders(folderOptions);
    }

    fetchFolderOptions();
  });

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  function handleCheckboxChange() {
    if (isChecked) {
      dropdownRef.current.disabled = false;
      setIsChecked(false);
    } else {
      dropdownRef.current.disabled = true;
      setIsChecked(true);
    }
  }

  function handleFolderChange(event) {
    setDropdownValue(event.target.value);
  }

  return (
    <form className={styles['add-bookmark-form']}>
      <InputField
        label={'Title'}
        type={'text'}
        value={title}
        onChange={handleTitleChange}
      />
      <InputField
        label={'URL'}
        type={'url'}
        value={url}
        onChange={handleUrlChange}
      />
      <Checkbox
        label="Favorite"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className={styles['folder-dropdown-row']}>
        <Dropdown
          label="Folder"
          options={folders}
          value={dropdownValue}
          onChange={handleFolderChange}
          ref={dropdownRef}
        />
        <IconButton icon={'+'} />
      </div>
      <Button label={'Add Bookmark'} />
    </form>
  );
}

export default AddBookmarkForm;
