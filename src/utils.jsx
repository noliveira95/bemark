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

export function getBookmarks(nodes) {
  return nodes.map((node) => {
    if (node.url) {
      return <Bookmark key={node.id} url={node.url} title={node.title} />;
    }
    return;
  });
}

export function getFolders(nodes) {
  return nodes.map((node) => {
    if (node.url) {
      return;
    }
    return <Folder key={node.id} title={node.title} items={node.children} />;
  });
}

export function getFavorites(nodes) {
  return nodes.map((node) => {
    if (node.title === 'Bookmarks') {
      if (node.url) {
        return <Bookmark key={node.id} url={node.url} title={node.title} />;
      } else {
        return (
          <Folder key={node.id} title={node.title} items={node.children} />
        );
      }
    } else {
      return;
    }
  });
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
