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

export default class Input extends Component<Props, State> {

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
		const {type} = this.props
		const val = (e.target as HTMLInputElement).value
		this.props.onChangeForm(type, val)
	}

	public render(): ReactElement {
		const {placeholder, type, tabIndex, required, autoFocus} = this.props
		return (
			<input
				placeholder={placeholder}
				name={type}
				type={type}
				tabIndex={tabIndex}
				required={required}
				autoFocus={autoFocus}
				onChange={this._onChange}
			/>
		);
	}
}