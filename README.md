# js_webpack_template
template for javascript project
create repo
copy .github/workflows
copy linter.yml
copy eslintrc
copy stylelintrc
npm init
npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator
npm install --save-dev eslint@6.8.x eslint-config-airbnb-base@14.1.x eslint-plugin-import@2.20.x babel-eslint@10.1.x
npm install --save-dev webpack webpack-cli
<!-- npm install -D @webpack-cli/init || npx webpack init and follow istructions. -->
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader

create webpack config file
link everything to webpack 
use module rules test

npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin
npm install webpack-dev-server --save-dev

set remote as well