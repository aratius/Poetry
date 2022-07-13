/**
 * 共通CMS画像
 */
export interface _CmsImg {
	url: string,
	width: number,
	height: number;
}

export interface _SubImg {
	img: _CmsImg;
}

export interface _Iframe {
	url: string;
}

/**
 * Works
 */
export interface _Works {
	contents: _Work[];
}


/**
 * Work
 */
export interface _Work {
	id: string,
	title: string,
	main_img: _CmsImg,
	main_desc: string,
	sub_contents: (_CmsImg | _Iframe)[],  // 画像かiframe
	categories: string[],
	credit: string,  // 自由入力（,区切りで改行）
	client: string,
	link: string,
}


/**
 * Aboutはワークショップ的にCMSの設計からやってみるのが面白そう
 */
export interface _About {
	name: string,
}