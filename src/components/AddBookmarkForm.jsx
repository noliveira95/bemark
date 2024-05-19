import styles from './styles/AddBookmarkForm.module.css';
import { useState } from 'react';
import Checkbox from './Checkbox';
import InputField from './InputField';
import Button from './Button';
import Dropdown from './Dropdown';

function AddBookmarkForm() {
  const [dropdownValue, setDropdownValue] = useState('category-1');

  const categories = [
    { label: 'Category 1', value: 'category-1' },
    { label: 'Category 2', value: 'category-2' },
    { label: 'Category 3', value: 'category-3' },
  ];

  function handleCategoryChange(event) {
    setDropdownValue(event.target.value);
  }

  return (
    <form className={styles['add-bookmark-form']}>
      <InputField label="Title" value={'title'} onChange={null} />
      <InputField label="URL" value={'url'} onChange={null} />
      <Dropdown
        label="Category"
        options={categories}
        value={dropdownValue}
        onChange={handleCategoryChange}
      />
      <Checkbox label="Favorite" checked={null} onChange={null} />
      <Button label={'Add Bookmark'} />
    </form>
  );
}

export default AddBookmarkForm;
