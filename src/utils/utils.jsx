import Bookmark from '../components/Bookmark';
import Folder from '../components/Folder';
import { getBookmarkTree } from '../api/bookmarksApi';

// Retrieve all items in the bookmarks tree
export function getAllItems(nodes = []) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return <Bookmark key={node.id} url={node.url} title={node.title} />;
      } else {
        return (
          <Folder
            key={node.id}
            title={node.title}
            items={node.children ?? []}
          />
        );
      }
    });
  } catch (error) {
    console.error('Error retrieving all items:', error);
    return [];
  }
}

// Retrieve the bookmarks in the bookmarks tree
export function getBookmarks(nodes) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return <Bookmark key={node.id} url={node.url} title={node.title} />;
      }
      return;
    });
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    return [];
  }
}

// Retrieve the folders in the bookmarks tree
export function getFolders(nodes) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return;
      }
      return <Folder key={node.id} title={node.title} items={node.children} />;
    });
  } catch (error) {
    console.error('Error retrieving folders:', error);
    return [];
  }
}

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
