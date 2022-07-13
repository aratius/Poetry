import { Component, ReactElement } from "react";
import MicroCMS from "src/cms/microCms";
import Works from "src/components/works";
import { API } from "src/constants/api";
import { _About, _Works } from "src/types/cms";

interface Props {
	works: _Works,
	about: _About
}
interface State { }

export default class Index extends Component<Props, State> {

	public state: State = {};
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	public componentDidMount(): void {
	}

	public render(): ReactElement {
		console.log(this.props);

		return (
			<>
				<Works contents={this.props.works.contents} />
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