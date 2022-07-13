import { Component, ReactElement } from "react";
import { _Work, _Works } from "src/types/cms";

interface Props {
	contents: _Work[]
}

interface State {

}

export default class Works extends Component<Props, State> {
	public render(): ReactElement {
		const { contents } = this.props
		return (
			<>
				{contents.map((content: _Work, i: number) => {
					return(
						<li key={content.id}>
							<figure>
								<img src={content.main_img.url} alt="" />
								<figcaption>{content.title}</figcaption>
							</figure>

						</li>
					)
				})}
			</>
		);
	}
}