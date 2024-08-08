import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{
						title: 'Documentation',
						to: '/documentation/introduction/'
					}
				],
				sidebar: {
					'documentation': [
						{
							title: 'Getting started',
							collapsible: true,
							items: [
								{
									title: 'Introduction',
									to: '/documentation/introduction/',
								},
								{
									title: 'Installation',
									to: '/documentation/installation/',
								},
								{
									title: 'Configuration',
									to: '/documentation/configuration/',
								},
								{
									title: 'Usage',
									to: '/documentation/usage/',
								},
								{
									title: 'Autocompletion',
									to: '/documentation/autocompletion/',
								},
							],
						},
						{
							title: 'Customization',
							collapsible: true,
							items: [
								{
									title: 'Theme',
									to: '/documentation/theme/'
								},
							],
						},
					]
				},
				github: 'https://github.com/kilavila/.vilath',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'Vilath',
				description: 'A CLI based password manager',
			},
		}),
	],
})

export default config
