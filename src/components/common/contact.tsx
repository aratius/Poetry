import { Component, ReactElement, SyntheticEvent } from "react";
import { sendMessage } from "src/api/incomingWebHook";
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

	/**
	 * フォーム変更時
	 * @param el
	 * @param val
	 */
	private _onChangeForm = (type: string, val: string): void => {
		// NOTE: バリデーションやるならここで

		const form = {...this.state.form}

		if(type == "name") {
			form.name = val
		} else if (type == "email") {
			form.email = val
		} else if (type == "phone") {
			form.phone = val
		} else if (type == "web") {
			form.web = val
		} else if (type == "message") {
			form.message = val
		}

		this.setState({
			...this.state,
			form: form
		})

	}

	private _Submit = (e: SyntheticEvent) => {
		for(const key in this.state.form){
			if((this.state.form as any)[key] == "") return;
		}
		const {name, email, phone, web, message} = this.state.form
		const date = new Date()
		const formated = `
問い合わせがありました。\n
日時 : ${date.getFullYear()}/${date.getMonth()}/${date.getDay()}　${date.getHours()}:${date.getMinutes()}
名前 : ${name}\n
メール : ${email}\n
電話番号 : ${phone}\n
ウェブサイト : ${web}\n
メッセージ : ${message}
		`
		sendMessage(formated)
	}

	public render(): ReactElement {
		return (
			<form className="contact" action="" method="post">
				<h2 className="contact__title">contact</h2>
				<fieldset>
					<Input
						placeholder="Your name"
						type="text"
						kind="name"
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
						kind="email"
						tabIndex={2}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<Input
						placeholder="Your Phone Number"
						type="tel"
						kind="phone"
						tabIndex={3}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<Input
						placeholder="Your Web Site starts with http://"
						type="url"
						kind="web"
						tabIndex={4}
						required
						onChangeForm={this._onChangeForm}
					/>
				</fieldset>
				<fieldset>
					<TextArea
						placeholder="Type your Message Here...."
						kind="message"
						tabIndex={5}
						required
						onChangeForm={this._onChangeForm}
					></TextArea>
				</fieldset>
				<fieldset>
					<button
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