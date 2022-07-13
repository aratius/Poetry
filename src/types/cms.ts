/**
 * 共通CMS画像
 */
export interface CmsImg {
	url: string,
	width: number,
	height: number;
}


/**
 * Works
 */
export interface Works {
	contents: Work[];
}


/**
 * Work
 */
export interface Work {
	id: string,
	title: string,
	main_img: CmsImg,
	main_desc: string,
	sub_contents: (CmsImg | string)[],  // 画像かiframe
	categories: string[],
	credit: string,  // 自由入力（,区切りで改行）
	client: string,
	link: string,
}


/**
 * Aboutはワークショップ的にCMSの設計からやってみるのが面白そう
 */
export interface About {
	name: string,
}