import { Component, ReactElement } from "react";

interface Props {
}

interface State {

}

export default class Contact extends Component<Props, State> {
	public render(): ReactElement {
		return (
			<form className="contact" action="" method="post">
				<h2 className="contact__title">contact</h2>
				<fieldset>
				<input placeholder="Your name" type="text" tabIndex={1} required autoFocus/>
				</fieldset>
				<fieldset>
				<input placeholder="Your Email Address" type="email" tabIndex={2} required/>
				</fieldset>
				<fieldset>
				<input placeholder="Your Phone Number" type="tel" tabIndex={3} required/>
				</fieldset>
				<fieldset>
				<input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} required/>
				</fieldset>
				<fieldset>
				<textarea placeholder="Type your Message Here...." tabIndex={5} required></textarea>
				</fieldset>
				<fieldset>
				<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
				</fieldset>
			</form>
		);
	}
}