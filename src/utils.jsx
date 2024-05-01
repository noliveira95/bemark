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
  return (
    <li className="bookmark">
      <a href={node.url} target="_blank" rel="noreferrer">
        {node.title}
      </a>
    </li>
  );
}

export function getFolder(node) {
  return (
    <li className="folder">
      {node.title}
      <ul>{getAllItems(node.children)}</ul>
    </li>
  );
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
