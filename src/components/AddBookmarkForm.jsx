import Checkbox from './Checkbox';
// import Dropdown from './Dropdown';
import InputField from './InputField';

// BookmarkForm.jsx
function AddBookmarkForm() {
  return (
    <div>
      <h1>Add Bookmark</h1>
      <form>
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
    </div>
  );
}

export default AddBookmarkForm;
