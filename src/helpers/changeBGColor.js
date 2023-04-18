import violetLogo from '../static/images/logo.png'
import blueLogo from '../static/images/logo-blue.png'

export const changeBGColorToBlue = () => {
	const body = document.body
	body?.classList?.remove('onMyAccount')
	body?.classList?.remove('WhiteColor')
	body?.classList?.remove('onAddRecruiter')
	body?.classList?.remove('VioletColor')
	body?.classList?.add('BlueColor')
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document.getElementsByClassName('Navigation-Logo')[0]
	logo.src = violetLogo

}

export const changeBGColorToWhite = () => {
	const body = document.body

	body?.classList?.remove('onMyAccount')
	body?.classList?.remove('BlueColor')
	body?.classList?.remove('onAddRecruiter')
	body?.classList?.remove('VioletColor')
	body?.classList?.add('WhiteColor')
	const nav = document?.getElementsByTagName('nav');
	nav[0]?.classList?.add('onWhite')

	const logo = document?.getElementsByClassName('Navigation-Logo')[0]
	if (logo) {logo.src = violetLogo}
}

export const changeBGColorToViolet = () => {
	const body = document.body

	body?.classList?.remove('onMyAccount')
	body?.classList?.remove('BlueColor')
	body?.classList?.remove('WhiteColor')
	body?.classList?.remove('onAddRecruiter')
	body?.classList?.add('VioletColor')
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document?.getElementsByClassName('Navigation-Logo')[0]
	if (logo) {logo.src = blueLogo}
}

export const changeBGColorMyAccount = () => {
	const body = document.body
	body?.classList?.remove('BlueColor')
	body?.classList?.remove('VioletColor')
	body?.classList?.remove('WhiteColor')
	body?.classList?.remove('onAddRecruiter')
	body?.classList?.add('onMyAccount')

	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document?.getElementsByClassName('Navigation-Logo')[0]
	if (logo) {logo.src = violetLogo}
}

export const changeBGColorAddRecruiter = () => {
	const body = document.body

	body?.classList?.remove('onMyAccount')
	body?.classList?.remove('BlueColor')
	body?.classList?.remove('WhiteColor')
	body?.classList?.remove('VioletColor')
	body?.classList?.add('onAddRecruiter')
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document?.getElementsByClassName('Navigation-Logo')[0]
	if (logo) {logo.src = blueLogo}
}
