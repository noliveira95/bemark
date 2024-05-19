import styles from './styles/AddBookmarkForm.module.css';
import Checkbox from './Checkbox';
// import Dropdown from './Dropdown';
import InputField from './InputField';
import Button from './Button';

function AddBookmarkForm() {
  return (
    <form className={styles['add-bookmark-form']}>
      <InputField label="Title" value={'title'} onChange={null} />
      <InputField label="URL" value={'url'} onChange={null} />
      {/* <Dropdown
        label="Category"
        options={categories}
        value={category}
        onChange={handleCategoryChange}
      /> */}
      <Checkbox label="Favorite" checked={null} onChange={null} />
      <Button label={'Add Bookmark'} />
    </form>
  );
}

export default AddBookmarkForm;
