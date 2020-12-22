const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'zh',
	otherLanguages: ['en', 'ja'],
	localeSubpaths,

});

const {
	appWithTranslation,
	withTranslation,
} = NextI18NextInstance;

module.exports = {
	nextI18next: NextI18NextInstance,
	appWithTranslation,
	withTranslation,
};
