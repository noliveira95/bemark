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

// if (node.url) {
//   return <Bookmark key={node.id} url={node.url} title={node.title} />;
// } else {
//   return (
//     <Folder key={node.id} title={node.title} items={node.children} />
//   );
// }

// Add a bookmark for www.google.com
// export function addBookmark() {
//   chrome.bookmarks.create(
//     {
//       parentId: '1',
//       title: 'Google',
//       url: 'https://www.google.com',
//     },
//     () => {
//       console.log('Bookmark added');
//       location.reload(); // Refresh the popup
//     }
//   );
// }

// Remove the bookmark for www.google.com
// export function removeBookmark() {
//   chrome.bookmarks.search({ url: 'https://www.google.com/' }, (results) => {
//     for (const result of results) {
//       if (result.url === 'https://www.google.com/') {
//         chrome.bookmarks.remove(result.id, () => {});
//       }
//     }
//     location.reload();
//   });
// }
