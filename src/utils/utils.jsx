import Bookmark from '../components/Bookmark';
import Folder from '../components/Folder';

export function getBookmarkTree() {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.getTree((tree) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(tree[0].children);
      }
    });
  });
}

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
    return nodes.map((node) => {
      if (node.url) {
        return;
      }
      return { label: node.title, value: node.id };
    });
  } catch (error) {
    console.error('Error retrieving folder options:', error);
    return [];
  }
}
