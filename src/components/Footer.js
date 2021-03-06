import React from 'react'
import { cx, css } from 'emotion'

const flexbox = css({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

const imgSize = css({
	maxWidth: '114px',
})

const center = css({
	textAlign: 'center',
})

const margin = css({
	margin: '10px'
})

const Footer = () => {
	return (
		<>
			<div className={cx( margin, center )} >Made with:</div>
			<div className={flexbox}>
				<a href="https://www.gatsbyjs.org/" className={margin}>
					<img 
						src="data:image/png;base64,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" 
						className={imgSize}
						alt='gatsby logo'
					/>
				</a>
				<a href="https://www.netlify.com" className={margin}>
					<img alt="netlify logo" src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
				</a>
			</div>
		</>
	)
}

export default Footer;