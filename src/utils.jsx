import Bookmark from './components/Bookmark';
import Folder from './components/Folder';

export function getAllItems(nodes) {
  return nodes.map((node) => {
    if (node.url) {
      return <Bookmark key={node.id} url={node.url} title={node.title} />;
    } else {
      return <Folder key={node.id} title={node.title} items={node.children} />;
    }
  });
}

// export function getBookmark(node) {
//   return <Bookmark url={node.url} title={node.title} id={node.id} />;
// }

// export function getFolder(node) {
//   return <Folder title={node.title} items={node.children} id={node.id} />;
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
