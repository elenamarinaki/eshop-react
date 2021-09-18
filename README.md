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
