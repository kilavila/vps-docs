import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					// Add your navbar configs here
					{
						title: 'Documentation',
						to: '/documentation/'
					}
				],
				sidebar: {
					'documentation': [
						{
							title: 'Getting started',
							to: '/documentation/getting-started/',
							collapsible: true,
							items: [
								{
									title: 'Installation',
									to: '/documentation/getting-started/installation/',
								},
								{
									title: 'Configuration',
									to: '/documentation/getting-started/configuration/',
								},
								{
									title: 'Usage',
									to: '/documentation/getting-started/usage/',
								},
							]
						},
					]
				},
				github: 'https://github.com/kilavila',
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
