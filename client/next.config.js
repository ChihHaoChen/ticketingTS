const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');
// const withStyles = require('@webdeb/next-styles');
const path = require('path');

const localeSubpaths = {};

module.exports = withPlugins(
	[
		[
			withReactSvg, {
			include: path.resolve(__dirname, './assets'),
			webpack(config, options) {
				return config
			}
		}]
	]
)