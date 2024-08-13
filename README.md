# Bemark

A user-friendly Chrome extension for managing bookmarks.


https://github.com/user-attachments/assets/2bf7c3b8-6591-45d1-88a2-9961845ea57d

<br>

## Local Setup

### Prerequisites

You will need to have `git`, `Node.js`, and `pnpm` installed on your machine. If you don't have `pnpm`, you can install it globally with `npm install -g pnpm`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/noliveira95/bemark.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bemark
   ```

3. Install the required dependencies:

   ```bash
   pnpm install
   ```

4. Build the Chrome extension:

   ```bash
   pnpm run build
   ```

### Loading the Extension in Chrome

1. Open Google Chrome and go to the Extensions page. You can access it by typing `chrome://extensions` in the address bar.

2. Enable the "Developer mode" toggle switch located in the top right corner of the Extensions page.

3. Click on the "Load unpacked" button and select the `dist` directory within the cloned repository.
