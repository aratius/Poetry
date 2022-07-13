import { Component, ReactElement } from "react";
import MicroCMS from "src/cms/microCms";
import Hoge from "src/components/hoge";
import { API } from "src/constants/api";

interface Props { }
interface State { }

export default class Index extends Component {

	public state: State = {};
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	public componentDidMount(): void {
	}

	public render(): ReactElement {
		return (
			<>
				{/* <Hoge /> */}
			</>
		);
	}
}

export const getStaticProps = async () => {
	const worksCms = new MicroCMS(API.WORKS)
	const aboutCms = new MicroCMS(API.ABOUT)
	const worksData = await worksCms.getList()
	const aboutData = await aboutCms.get()
	console.log(worksCms)
	console.log(aboutData)

	return {
		props: {
			worksData
		}
	};
};