import { Component, ReactElement, SyntheticEvent } from "react";
import Input from "./Input";
import TextArea from "./textArea";

interface Props {
}

interface State {
	form: {
		name: string,
		email: string,
		phone: string,
		web: string,
		message: string
	},
	canSubmit: boolean
}

/**
 * NOTE: 今回バリデーションはしてない
 */
export default class Contact extends Component<Props, State> {

	public state: State = {
		form: {
			name: "",
			email: "",
			phone: "",
			web: "",
			message: ""
		},
		canSubmit: false
	}

	componentDidUpdate(): void {

	}

	/**
	 * フォーム変更時
	 * @param el
	 * @param val
	 */
	private _onChangeForm = (type: string, val: string): void => {
		console.log(type, val);
		// NOTE: バリデーションやるならここで

	}

	private _Submit = (e: SyntheticEvent) => {
		console.log("submit");
	}

	public render(): ReactElement {
		return (
			<form className="contact" action="" method="post">
				<h2 className="contact__title">contact</h2>
				<fieldset>
					<Input
						placeholder="Your name"
						type="text"
						name="text"
						tabIndex={1}
						required
						autoFocus
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<Input
						placeholder="Your Email Address"
						type="email"
						name="email"
						tabIndex={2}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<Input
						placeholder="Your Phone Number"
						type="tel"
						name="tel"
						tabIndex={3}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<Input
						placeholder="Your Web Site starts with http://"
						type="url"
						name="url"
						tabIndex={4}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<TextArea
						placeholder="Type your Message Here...."
						name="message"
						tabIndex={5}
						required
						onChangeForm={this._onChangeForm}
					></TextArea>
				</fieldset>
				<fieldset>
					<button
						name="submit"
						type="submit"
						id="contact-submit"
						data-submit="...Sending"
						onClick={this._Submit}
					>Submit</button>
				</fieldset>
			</form>
		);
	}
}