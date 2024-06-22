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

export function getAllItems(nodes = []) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return (
          <Bookmark
            key={node.id}
            id={node.id}
            url={node.url}
            title={node.title}
          />
        );
      } else {
        return (
          <Folder
            key={node.id}
            id={node.id}
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

export function getBookmarks(nodes) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return (
          <Bookmark
            key={node.id}
            id={node.id}
            url={node.url}
            title={node.title}
          />
        );
      }
      return;
    });
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    return [];
  }
}

export function createBookmark(title, url, selectedFolder, isChecked) {
  if (isChecked) {
    return createFavorite(title, url);
  }
  return new Promise((resolve, reject) => {
    const parentId = selectedFolder || null;
    chrome.bookmarks.create(
      { title: title, url: url, parentId: parentId },
      (bookmark) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(bookmark);
        }
      }
    );
  });
}

export function deleteBookmark(id) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.remove(id, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
}

export function updateBookmark(id, title, url) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.update(id, { title: title, url: url }, (bookmark) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(bookmark);
      }
    });
  });
}

export function getFolders(nodes) {
  try {
    return nodes.map((node) => {
      if (node.url) {
        return;
      }
      return (
        <Folder
          key={node.id}
          id={node.id}
          title={node.title}
          items={node.children}
        />
      );
    });
  } catch (error) {
    console.error('Error retrieving folders:', error);
    return [];
  }
}

export function createFolder(title, location) {
  return new Promise((resolve, reject) => {
    const parentId = location || null;
    chrome.bookmarks.create({ title: title, parentId: parentId }, (folder) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(folder);
      }
    });
  });
}

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

export async function setupFavoritesFolder() {
  const favoritesFolder = await checkFavoritesFolder();
  if (!favoritesFolder) {
    await createFavoritesFolder();
  }
}

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
        <Bookmark
          key={f.id}
          id={f.id}
          url={f.url}
          title={f.title}
          favorite={true}
        />
      )) ?? []
    );
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    return [];
  }
}

export function createFavorite(title, url) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.search({ title: 'Bemark Favorites' }, (results) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else if (results.length === 0) {
        reject(new Error('Bemark Favorites folder not found'));
      } else {
        const parentId = results[0].id;
        chrome.bookmarks.create(
          { title: title, url: url, parentId: parentId },
          (bookmark) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(bookmark);
            }
          }
        );
      }
    });
  });
}

export async function removeFavorite(id) {
  try {
    const bookmarkTree = await getBookmarkTree();
    const otherBookmarksFolder = findOtherBookmarksFolder(bookmarkTree);

    if (!otherBookmarksFolder) {
      throw new Error('Other Bookmarks folder not found');
    }

    const movedBookmark = await new Promise((resolve, reject) => {
      chrome.bookmarks.move(
        id,
        { parentId: otherBookmarksFolder.id },
        (result) => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(result);
          }
        }
      );
    });

    return movedBookmark;
  } catch (error) {
    console.error('Error moving bookmark:', error);
    throw error;
  }
}

export async function addFavorite(id) {
  try {
    const bookmarkTree = await getBookmarkTree();
    const favoritesFolder = findFavoritesFolder(bookmarkTree);

    if (!favoritesFolder) {
      throw new Error('Favorites folder not found');
    }

    const movedBookmark = await new Promise((resolve, reject) => {
      chrome.bookmarks.move(id, { parentId: favoritesFolder.id }, (result) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    });

    return movedBookmark;
  } catch (error) {
    console.error('Error moving bookmark:', error);
    throw error;
  }
}

export function checkIsFavorite(id) {
  return new Promise((resolve) => {
    chrome.bookmarks.get(id, (bookmark) => {
      chrome.bookmarks.get(bookmark.parentId, (parentBookmark) => {
        resolve(parentBookmark.title === 'Bemark Favorites');
      });
    });
  });
}

function findOtherBookmarksFolder(nodes) {
  for (let node of nodes) {
    if (node.title === 'Other Bookmarks') {
      return node;
    }
    if (node.children) {
      const found = findOtherBookmarksFolder(node.children);
      if (found) return found;
    }
  }
  return null;
}

export function findFavoritesFolder(nodes) {
  for (let node of nodes) {
    if (node.title === 'Bemark Favorites') {
      return node;
    }
    if (node.children) {
      const found = findFavoritesFolder(node.children);
      if (found) return found;
    }
  }
  return null;
}
