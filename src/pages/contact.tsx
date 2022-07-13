import { Component, ReactElement } from "react";
import MicroCMS from "src/cms/microCms";
import ContactForm from "src/components/common/contact";
import Header from "src/components/common/header";
import { API } from "src/constants/api";
import { _About, _Works } from "src/types/cms";

interface Props {
	about: _About
}
interface State { }

export default class Contact extends Component<Props, State> {

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