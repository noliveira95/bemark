import styles from './styles/AddBookmarkForm.module.css';
import Checkbox from './Checkbox';
// import Dropdown from './Dropdown';
import InputField from './InputField';

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
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default AddBookmarkForm;
