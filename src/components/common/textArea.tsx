import Link from "next/link";
import { Component, ReactElement, SyntheticEvent } from "react";

interface Props {
	placeholder: string,
	type: string,
	name: string,
	tabIndex: number,
	required?: boolean,
	autoFocus?: boolean,
	onChangeForm: (type: string, val: string) => void
}

interface State {

}

export default class TextArea extends Component<Props, State> {

	static defaultProps: Props = {
		placeholder: "",
		type: "",
		name: "",
		tabIndex: 1,
		required: false,
		autoFocus: false,
		onChangeForm: () => {}
	}

	/**
	 *
	 * @param e
	 */
	private _onChange = (e: SyntheticEvent): void => {
		console.log(e);
	}

	public render(): ReactElement {
		const {placeholder, type, tabIndex, required, autoFocus} = this.props
		return (
			<textarea
				placeholder={placeholder}
				// type={type}
				name={type}
				tabIndex={tabIndex}
				required={required}
				autoFocus={autoFocus}
				onChange={this._onChange}
			></textarea>
		);
	}
}