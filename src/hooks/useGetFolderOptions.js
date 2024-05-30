import { useState, useEffect } from 'react';
import { getFolderOptions } from '../utils/getFolderOptions';

export default function useGetFolderOptions() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function fetchFolderOptions() {
      const folderData = await getFolderOptions();
      const folderOptions = folderData.map((folder) => {
        return {
          label: folder.label,
          value: folder.value,
        };
      });
      setFolders(folderOptions);
    }

    fetchFolderOptions();
  }, []);

  return folders;
}
