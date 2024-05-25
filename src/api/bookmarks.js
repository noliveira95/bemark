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

// TODO: set up isChecked logic
export function createBookmark(title, url, selectedFolder) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.create(
      { title: title, url: url, parentId: selectedFolder.id || null },
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
