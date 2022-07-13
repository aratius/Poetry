import { Component, ReactElement } from "react";
import MicroCMS from "src/api/microCms";
import ContactForm from "src/components/common/contact";
import Head from "src/components/common/head";
import Header from "src/components/common/header";
import { API } from "src/constants/api";
import { _About, _Works } from "src/types/cms";

interface Props {
	about: _About
}
interface State { }

export default class Contact extends Component<Props, State> {

	public render(): ReactElement {
		const {about} = this.props
		return (
			<>
				<Head
					url={`https://poetry.aualrxse.com/contact`}
					title={about.name}
					description={`${about.name}'s portfolio.`}
					siteName={about.name}
					ogImgUrl="https://poetry.aualrxse.com/150x150.png"
				/>
				<Header name={about.name}/>
				<div className="contact__wrapper">
					<ContactForm />
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