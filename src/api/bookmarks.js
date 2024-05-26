import { createFavorite } from '../utils/favorites';

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
