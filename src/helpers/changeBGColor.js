import violetLogo from '../static/iamges/logo.png'
import blueLogo from '../static/iamges/logo-blue.png'

export const changeBGColorToBlue = () => {
	document.body.style.backgroundColor = "#006eff"
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document.getElementsByClassName('Navigation-Logo')[0]
	logo.src = violetLogo

}

export const changeBGColorToWhite = () => {
	document.body.style.backgroundColor = "#ffffff"
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.add('onWhite')

	const logo = document.getElementsByClassName('Navigation-Logo')[0]
	logo.src = violetLogo
}

export const changeBGColorToViolet = () => {
	document.body.style.backgroundColor = "#c100d1"
	const nav = document.getElementsByTagName('nav')[0]
	nav?.classList?.remove('onWhite')

	const logo = document.getElementsByClassName('Navigation-Logo')[0]
	logo.src = blueLogo
}
