import { Component, ReactElement } from "react";
import MicroCMS from "src/apis/microCms";
import Head from "src/components/common/head";
import Header from "src/components/common/header";
import Works from "src/components/works";
import { API } from "src/constants/apis";
import { _About, _Works } from "src/types/cms";

interface Props {
	about: _About
}
interface State { }

export default class About extends Component<Props, State> {

	public render(): ReactElement {
		const {about} = this.props
		return (
			<>
				<Head
					url={`https://poetry.aualrxse.com/about`}
					title={about.name}
					description={`${about.name}'s portfolio.`}
					siteName={about.name}
					ogImgUrl="https://poetry.aualrxse.com/150x150.png"
				/>
				<Header name={about.name}/>
				<div className="about__wrapper">
					<h1>Hello, my name is {about.name}.</h1>
				</div>
			</>
		);
	}
}

export const getStaticProps = async () => {
	const aboutCms = new MicroCMS(API.ABOUT)
	const about = await aboutCms.get()
	return {
		props: {
			about
		}
	};
};