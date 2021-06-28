# Changelog

## [3.0.0] - 2021-06-28

### Added

- [react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md) for missing `key` prop

### Changed

- Upgraded [Standard from v14 to v16](https://github.com/standard/standard/blob/093b05608589e9345535db1f7d61cb5c4c006829/CHANGELOG.md)

## [2.0.0] - 2020-02-12

### Added

**New warnings for accessibility issues:**

- [jsx-a11y/accessible-emoji](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
- [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
- [jsx-a11y/anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)
- [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [jsx-a11y/aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [jsx-a11y/aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [jsx-a11y/aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)
- [jsx-a11y/aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [jsx-a11y/heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)
- [jsx-a11y/iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [jsx-a11y/img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [jsx-a11y/no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [jsx-a11y/role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [jsx-a11y/role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)

**New warnings for potential issues:**

- [react-hooks/exhaustive-deps](https://reactjs.org/docs/hooks-rules.html)

**New errors:**

- [react-hooks/rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
- [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
- [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
- [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
- [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
- [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
- [react/no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
- [react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
- [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
- [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
- [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)

**Other:**

- 💚 Added first tests
- Created initial CHANGELOG.md

## [1.0.0] - 2017-11-13

### Added

- Create project setup with README, etc.
- Create first configuration, mostly just extending [`eslint-config-standard`](https://github.com/standard/eslint-config-standard)

[2.0.0]: https://github.com/gsandf/eslint-config-gsandf-react/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/gsandf/eslint-config-gsandf-react/releases/tag/v1.0.0
