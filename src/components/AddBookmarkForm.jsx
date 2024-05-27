import styles from './styles/AddBookmarkForm.module.css';
import { useContext, useState, useEffect, useRef } from 'react';
import Checkbox from './Checkbox';
import InputField from './InputField';
import Button from './Button';
import Dropdown from './Dropdown';
import { createBookmark } from '../api/bookmarks';
import { CurrentTabContext } from '../Popup';
import useGetFolderOptions from '../hooks/useGetFolderOptions';

function AddBookmarkForm() {
  const { currentTab } = useContext(CurrentTabContext);
  const [selectedFolder, setSelectedFolder] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState(currentTab.title);
  const [url, setUrl] = useState(currentTab.url);

  const dropdownRef = useRef();

  const folders = useGetFolderOptions();

  useEffect(() => {
    setTitle(currentTab.title);
    setUrl(currentTab.url);
  }, [currentTab]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleUrlChange(e) {
    setUrl(e.target.value);
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

  function handleFolderChange(e) {
    setSelectedFolder(e.target.value);
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
      <Dropdown
        label="Folder"
        options={folders}
        value={selectedFolder}
        onChange={handleFolderChange}
        ref={dropdownRef}
      />
      <Button
        label={'Add Bookmark'}
        onClick={(e) => {
          e.preventDefault();
          createBookmark(title, url, selectedFolder, isChecked);
        }}
      />
    </form>
  );
}

export default AddBookmarkForm;
