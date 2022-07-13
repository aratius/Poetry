import { Component, ReactElement } from "react";
import MicroCMS from "src/cms/microCms";
import Contact from "src/components/common/contact";
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

	public state: State = {};
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	public componentDidMount(): void {
	}

	public render(): ReactElement {
		const {about, works} = this.props
		return (
			<>
				<Header name={about.name}/>
				<div className="top__wrapper">
					<Works contents={works.contents} />
					<Contact />
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