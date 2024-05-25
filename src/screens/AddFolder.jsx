import styles from '../components/styles/AddFolderForm.module.css';
import Button from '../components/Button';
import InputField from '../components/InputField';

function AddFolder() {
  return (
    <div className="screen">
      <h1>Add Folder</h1>
      <form className={styles['add-folder-form']}>
        <InputField label="Folder Name" />
        <Button label="Add Folder" />
      </form>
    </div>
  );
}

export default AddFolder;
