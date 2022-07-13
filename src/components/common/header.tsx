import Link from "next/link";
import { Component, ReactElement } from "react";

interface Props {
	name: string
}

interface State {

}

export default class Header extends Component<Props, State> {
	public render(): ReactElement {
		const {name} = this.props
		return (
			<header className="header">
				<h1 className="header__logo">
					<Link href="/">
						{name}
					</Link>
				</h1>
				<nav className="header__nav">
					<ol className="header__nav__link">
						<Link href="/about">
							about
						</Link>
					</ol>
					<ol className="header__nav__link">
						<Link href="/works">
							works
						</Link>
					</ol>
					<ol className="header__nav__link">
						<Link href="/contact">
							contact
						</Link>
					</ol>
				</nav>
			</header>
		);
	}
}