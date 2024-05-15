import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import InputField from './InputField';

// BookmarkForm.jsx
function BookmarkForm() {
  const categories = [
    { label: 'Personal', value: 'personal' },
    { label: 'Work', value: 'work' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <form>
      <InputField label="Title" value={title} onChange={handleTitleChange} />
      <InputField label="URL" value={url} onChange={handleUrlChange} />
      <Dropdown
        label="Category"
        options={categories}
        value={category}
        onChange={handleCategoryChange}
      />
      <Checkbox
        label="Favorite"
        checked={isFavorite}
        onChange={handleFavoriteChange}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default BookmarkForm;
