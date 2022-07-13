import Link from "next/link";
import { Component, ReactElement, SyntheticEvent } from "react";

interface Props {
	placeholder: string,
	type: string,
	kind: string,
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
		kind: "",
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
		const {kind} = this.props
		const val = (e.target as HTMLInputElement).value
		this.props.onChangeForm(kind, val)
	}

	public render(): ReactElement {
		const {placeholder, type, tabIndex, required, autoFocus} = this.props
		return (
			<textarea
				placeholder={placeholder}
				tabIndex={tabIndex}
				required={required}
				autoFocus={autoFocus}
				onChange={this._onChange}
			></textarea>
		);
	}
}