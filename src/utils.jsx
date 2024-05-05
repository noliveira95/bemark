import Bookmark from './components/Bookmark';
import Folder from './components/Folder';

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

// Check if the "Bemark Favorites" folder exists
function checkFavoritesFolder() {
  return new Promise((resolve) => {
    chrome.bookmarks.getTree((nodes) => {
      const otherBookmarks = nodes[0].children.find(
        (node) => node.title === 'Other Bookmarks'
      );
      const favoritesFolder = otherBookmarks.children.find(
        (node) => node.title === 'Bemark Favorites'
      );
      resolve(favoritesFolder);
    });
  });
}

// Create the "Bemark Favorites" folder
function createFavoritesFolder() {
  return new Promise((resolve) => {
    chrome.bookmarks.getTree((nodes) => {
      const otherBookmarks = nodes[0].children.find(
        (node) => node.title === 'Other Bookmarks'
      );
      chrome.bookmarks.create(
        {
          parentId: otherBookmarks.id,
          title: 'Bemark Favorites',
        },
        (newFolder) => {
          resolve(newFolder);
        }
      );
    });
    console.log('Favorites folder created');
  });
}

// Check if the "Bemark Favorites" folder exists, and if not, create it
export async function setupFavoritesFolder() {
  const favoritesFolder = await checkFavoritesFolder();
  if (!favoritesFolder) {
    await createFavoritesFolder();
  }
}

// Retrieve the bookmarks in the "Bemark Favorites" folder
export async function getFavorites(nodes) {
  try {
    await setupFavoritesFolder();
    const otherBookmarks = await nodes.find(
      (node) => node.title === 'Other Bookmarks'
    );
    const favorites = await otherBookmarks?.children?.find(
      (node) => node.title === 'Bemark Favorites'
    );

    let bookmarks = favorites?.children?.filter((f) => f.url);
    if (bookmarks.length > 3) {
      bookmarks = bookmarks.slice(0, 3);
    }

    return (
      bookmarks?.map((f) => (
        <Bookmark key={f.id} url={f.url} title={f.title} isFavorite={true} />
      )) ?? []
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
