import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Component } from "react";
import MicroCMS from "src/apis/microCms";
import Head from "src/components/common/head";
import Header from "src/components/common/header";
import Work from "src/components/works/detail";
import { API } from "src/constants/apis";
import { _About, _Work } from "src/types/cms";

interface Props {
	work: _Work,
	about: _About
}

interface State {

}

export default class Detail extends Component<Props, State> {

	render() {
		const {work, about} = this.props
		return (
			<>
				<Head
					url={`https://poetry.aualrxse.com/${work.id}`}
					title={work.title}
					description={`${about.name}'s portfolio.`}
					siteName={about.name}
					ogImgUrl={work.main_img.url}
				/>
				<Header name={about.name} />
				<div className="work_detail__wrapper">
					<Work data={work} />
				</div>
			</>
		);
	}

}

export const getStaticPaths: GetStaticPaths = async () => {
	const cms = new MicroCMS(API.WORKS)
	const data = await cms.getList()
	const paths = data.contents.map(content => `/works/${content.id}`);
	return {
		paths,
		fallback: false
	};
};


export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
	const worksCms = new MicroCMS(API.WORKS)
	const aboutCms = new MicroCMS(API.ABOUT)
	const work = await worksCms.get(params!.id as string)
	const about = await aboutCms.get()
	return {
		props: { work, about }
	};
};