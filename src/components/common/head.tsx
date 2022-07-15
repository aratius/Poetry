import NextHead from "next/head";
import { Component, ReactElement } from "react";

interface Props {
	url: string,
	title?: string,
	description?: string,
	siteName?: string,
	ogImgUrl?: string
}

interface State {

}

export default class Head extends Component<Props, State> {

	static defaultProps: Props = {
		url: "",
		title: "",
		description: "",
		siteName: "",
		ogImgUrl: ""
	}

	public render(): ReactElement {
		const {url, title, description, siteName, ogImgUrl} = this.props
		return (
			<NextHead>
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={siteName} />
				<meta property="og:image" content={ogImgUrl} />
			</NextHead>
		);
	}
}