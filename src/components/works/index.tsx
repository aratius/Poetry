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
			<ul className="works__wrapper">
				{contents.map((content: _Work, i: number) => {
					return(
						<li className="works__item" key={content.id}>
							<img className="works__item__img" src={content.main_img.url} alt="" />
							<h3 className="works__item__title">{content.title}</h3>
						</li>
					)
				})}
			</ul>
		);
	}
}