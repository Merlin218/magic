export default {
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: {
			ts: "@typescript-eslint/parser",
		},
		extraFileExtensions: [".vue"],
	},
	extends: ["plugin:vue/strongly-recommended"],
}
