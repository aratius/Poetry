import { Component, ReactElement } from "react";
import Hoge from "src/components/hoge";

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
				<Hoge />
			</>
		);
	}
}