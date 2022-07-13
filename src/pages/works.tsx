import { Component, ReactElement } from "react";
import MicroCMS from "src/apis/microCms";
import Head from "src/components/common/head";
import Header from "src/components/common/header";
import Works from "src/components/works";
import { API } from "src/constants/api";
import { _About, _Works } from "src/types/cms";

interface Props {
	works: _Works,
	about: _About
}
interface State { }

export default class Index extends Component<Props, State> {

	public render(): ReactElement {
		const {about, works} = this.props
		return (
			<>
				<Head
					url={`https://poetry.aualrxse.com/works`}
					title={about.name}
					description={`${about.name}'s portfolio.`}
					siteName={about.name}
					ogImgUrl="https://poetry.aualrxse.com/150x150.png"
				/>
				<Header name={about.name}/>
				<div className="top__wrapper">
					<Works contents={works.contents} />
				</div>
			</>
		);
	}
}

export const getStaticProps = async () => {
	const worksCms = new MicroCMS(API.WORKS)
	const aboutCms = new MicroCMS(API.ABOUT)
	const works = await (await worksCms.getList())
	const about = await aboutCms.get()
	return {
		props: {
			works,
			about
		}
	};
};