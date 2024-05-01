import Bookmark from './components/Bookmark';
import Folder from './components/Folder';

export function getAllItems(nodes) {
  return nodes.map((node) => {
    if (node.url) {
      return getBookmark(node);
    } else {
      return getFolder(node);
    }
  });
}

export function getBookmark(node) {
  return <Bookmark url={node.url} title={node.title} />;
}

export function getFolder(node) {
  return <Folder title={node.title} items={node.children} />;
}

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
