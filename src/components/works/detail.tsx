import { Component, ReactElement } from "react";
import { _CmsImg, _Iframe, _SubImg, _Work } from "src/types/cms";

interface Props {
	data: _Work
}

interface State {

}

export default class Work extends Component<Props, State> {
	public render(): ReactElement {
		const {data} = this.props
		return (
			<>
				{/* カテゴリ */}
				<p className="work__category">
					{data.categories.map((text: string, i: number, arr:any[]) => {
						let camma = ","
						if(i == arr.length-1) camma = ""
						return (
							<span key={i}>{text}{camma}</span>
						)
					})}
				</p>

				{/* タイトル */}
				<h2 className="work__title">{data.title}</h2>

				{/* メイン画像 */}
				<img className="work__main_img" src={data.main_img.url}/>

				<div className="work__sub">
					{/* サブ画像 or iframe */}
					{data.sub_contents.map((content: (_SubImg|_Iframe), i: number) => {
						if((content as any).fieldId == "iframe") {
						return (
							<div className="work__sub__iframe" dangerouslySetInnerHTML={{__html: (content as _Iframe).url}}></div>
							)
						} else {
						return (
							<img className="work__sub__img" key={i} src={(content as _SubImg).img.url} alt="" />
							)
						}
					})}
				</div>

				<p className="work__main__desc">{data.main_desc}</p>

				{/* クレジット */}
				<h4>credit</h4>
				<p className="work__credit">
					{data.credit.split("\n").map((text: string, i: number) => {
						return (
							<span key={i}>{text}<br/></span>
						)
					})}
				</p>

				{/* クライアント */}
				<h4>client</h4>
				<p className="work__client">{data.client}</p>

				{/* リンク */}
				<a className="work__link" href={data.link} target="_blank" rel="noreferrer">link</a>
			</>
		);
	}
}