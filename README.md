# bridge-core/docs

<a href="https://pr.new/github.com/bridge-core/docs" target="_blank">
<img alt="Open in Codeflow" src="https://developer.stackblitz.com/img/open_in_codeflow_small.svg" >
</a>

The bridge-core/docs directory contains reference documentation for the add-on editor bridge. v2.

## Contributing

Thanks for considering to contribute to the bridge-core/docs project.
To get started, first make sure that you have NodeJS installed. Then, follow the steps below.

1. Fork this repository and clone it to your computer.
2. Run `npm install` within the cloned repository.
3. Run `npm run dev` to start the development server.

We use Prettier to automatically format our code. If you use VS Code, we recommend you to install the Prettier extension.

### Style Guide

#### Spelling

-   **Add-On**, not addon or AddOn
-   **do not**, not don't

#### Guides

All guides should have a section outlining what users can learn from them.
[See Example](./docs/guide/advanced/dash/index.md)

#### API Documentation

When describing the format of a JSON file, use a style similar to [this one](./docs/extensions/presets/manifest.md).
Alternatively, you can work with code snippets and add comments to them.
