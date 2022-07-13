import { Component, ReactElement } from "react";
import MicroCMS from "src/api/microCms";
import Header from "src/components/common/header";
import Works from "src/components/works";
import { API } from "src/constants/api";
import { _About, _Works } from "src/types/cms";

interface Props {
	about: _About
}
interface State { }

export default class About extends Component<Props, State> {

	public state: State = {};
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	public componentDidMount(): void {
	}

	public render(): ReactElement {
		const {about} = this.props
		return (
			<>
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