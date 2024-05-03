import Bookmark from './components/Bookmark';
import Folder from './components/Folder';

export function getBookmarkTree() {
  return new Promise((resolve) => {
    chrome.bookmarks.getTree((tree) => {
      resolve(tree[0].children);
    });
  });
}

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

export async function getFavorites(nodes) {
  try {
    const otherBookmarks = await nodes.find(
      (node) => node.title === 'Other Bookmarks'
    );
    const favorites = await otherBookmarks?.children?.find(
      (node) => node.title === 'Bemark Favorites'
    );

    return (
      favorites?.children?.map((f) => {
        if (f.url) {
          return <Bookmark key={f.id} url={f.url} title={f.title} />;
        } else {
          return <Folder key={f.id} title={f.title} items={f.children} />;
        }
      }) ?? []
    );
  } catch (error) {
    console.error('Error retrieving favorites:', error);
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
