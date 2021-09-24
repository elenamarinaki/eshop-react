# E-Shop Project with React 🛍️

## Production Notes 💭

- First we created a basic template of the project. We focused on creating a very elementary architecture of how we want the items to be presented on the page. 🌳
- All _elements_ are positioned for the time being inside the `HomePage` component. Later, they are going to move to their own folders and be their own components.
- Styling is done with `SASS` 💅.

### Project Files + Modules 📁

- The `@jest` (inside _node_modules_) files are for testing.
- React tries to create an _IDE environment_: it does linting, testing, and everything else that is provided inside `node_modules`.
- The `node_modules` are used only during the **_development stage_**.
- When we **_ship and build_** our code, most of these modules won't make it through. Only the ones that are needed for the app stay at the end.
- **Dependency management** between libraries is a crucial issue.
  - _React scripts vs babel-jest version conflict_ => it's an open issue in react git repository.
- `package-lock.json` => allows us to have consistent installations of the same app across different platforms. Knows _which dependencies (version) are compatible_ with each other.
- `serviceWorker.js` => pre-build with `create-react-app`. It's used for making **_progressive web apps_**.

### Components vs Pages 🧱 📄

- `Components` refers to any _reusable_ component.
- `Pages` refers to any component that is used once.

### Notes on Updating Packages 📦

#### `NPM` or `YARN`

- If there is any `.lock` file, we _remove_ it, so we can update versions:
  ```
  rm -rf yarn.lock
  ```
- Update all of the existent dependencies:
  ```
  npm update -D
  ```
- If vulnerabilities are found:
  ```
  npm audit fix
  ```
  And then we have to follow any commands that are suggested to us as result. The process of _auditing_ can be quite extensive.
- Finally, we can start our project to make sure everything is working:
  ```
  npm start
  ```

#### Lock Files 🔒

- `package-lock.json` => find `react-dom` library
  - we can check all versions are up to date

### Removing `node_modules` from **_github_** (in case accidentally uploaded 🙈)

- Create `.gitignore` file.
- add `node_modules/` to gitignore
- run:
  ```
  git rm -r --cached .
  git add .
  git commit -m "remove gitignore files"
  git push
  ```

### The Birth of SPA 🍎

- In today's applications, the server takes care of sending the **data only** and not how to render (or re-render) the DOM, when receiving requests.
- This way, the same server can be used for mobile devices as well.
