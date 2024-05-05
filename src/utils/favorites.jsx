import Bookmark from '../components/Bookmark';

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
