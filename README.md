# Ionic-Angular-Course
An intense and fast-paced introduction to the important fundamentals of Ionic, Angular, and Firebase.
This course is futureproof, no-nonsense, zero-to-one, and PRACTICAL.

## Getting Started
Note: Refer to the README of the particular repo for more detailed instructions, including possible important renames to be made.

### Option 1: Individual Repos
#### Method A: Clone
1) Click on the repo you want to clone, which will take you to the dedicated page.
2) Clone the repo using https into a fresh folder on your machine.
3) Run `npm install` from the root. And if the project has a **functions** directory, run `npm install` from inside it.

#### Method B: Download
1) Click on the repo you want to download, which will take you to the dedicated page.
2) Download the zip. Extract it to a fresh folder. Open in your favourite code editor.
3) Run `npm install` from the root. And if the project has a **functions** directory, run `npm install` from inside it.
* Refer to the README of the particular repo for more detailed instructions, including possible important renames to be made.

### Option 2: Master Repo (this)
#### Method A: Clone
1) Run the following command to clone the repo and recursively install the submodules:
    `git clone --recursive https://github.com/didaktio/Ionic-Angular-Course.git`
2) In each of the projects or just the ones you want to use, run `npm install` from the root and if necessary, from inside the **functions** directory.

#### Method A: Download
Submodules won't be included in master repo downloads, which means we must install them manually:
1) Extract the zip into a fresh folder, open it up in your editor.
2) Open a terminal and cd into the root.
3) Run `git submodule init`, then `git submodule update`.

## Troubleshooting
* Empty directories means the submodules haven't installed. Simply delete and go through option **2a**. Or from the master repo root, run `git submodule init`, then `git submodule update`.
* If you've updated dependencies and are running into problems, delete `node_modules` and replace your local `package-lock.json` with the one included in the repo. Then run `npm install` and try again.
* The 'Cannot GET /' error: The terminal output wherefrom the dev server is being run should state what the problem is, but typically it's caused by a typo or import statement problem and can be solved without restarting the server by simply addressing the problem and refreshing the page.
