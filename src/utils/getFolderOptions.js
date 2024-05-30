import { getBookmarkTree } from '../api/bookmarks';

// Retrieve folders for the folder dropdown menu
export async function getFolderOptions() {
  try {
    const nodes = await getBookmarkTree();
    const result = getFolderOptionsIterative(nodes);
    return result;
  } catch (error) {
    console.error('Error retrieving folder options:', error);
    return [];
  }

  function getFolderOptionsIterative(nodes) {
    let folderOptions = [];
    const stack = [...nodes];

    while (stack.length > 0) {
      const node = stack.pop();
      if (!node.url) {
        folderOptions.push({ label: node.title, value: node.id });
        if (node.children) {
          stack.push(...node.children);
        }
      }
    }

    return folderOptions.reverse();
  }
}
