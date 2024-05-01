// Add a bookmark for www.google.com
export function addBookmark() {
  chrome.bookmarks.create(
    {
      parentId: '1',
      title: 'Google',
      url: 'https://www.google.com',
    },
    () => {
      console.log('Bookmark added');
      location.reload(); // Refresh the popup
    }
  );
}

// Remove the bookmark for www.google.com
export function removeBookmark() {
  chrome.bookmarks.search({ url: 'https://www.google.com/' }, (results) => {
    for (const result of results) {
      if (result.url === 'https://www.google.com/') {
        chrome.bookmarks.remove(result.id, () => {});
      }
    }
    location.reload();
  });
}

// Recursively display the bookmarks
export function displayBookmarks(nodes, parentNode) {
  for (const node of nodes) {
    if (node.url) {
      displayBookmark(node, parentNode);
    } else {
      displayFolder(node, parentNode);
    }
  }
}

export function displayBookmark(node, parentNode) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = node.url;
  link.target = '_blank';
  link.textContent = node.title;
  listItem.appendChild(link);
  listItem.setAttribute('class', 'bookmark');
  parentNode.appendChild(listItem);
}

export function displayFolder(node, parentNode) {
  const listItem = document.createElement('li');
  listItem.textContent = node.title;
  listItem.setAttribute('class', 'folder');
  parentNode.appendChild(listItem);

  if (node.children) {
    const sublist = document.createElement('ul');
    parentNode.appendChild(sublist);
    displayBookmarks(node.children, sublist);
  }
}
