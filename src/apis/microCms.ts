import { createClient, MicroCMSListResponse } from "microcms-js-sdk";
import { API_KEY, SERVICE_DOMAIN } from "src/constants/apis";

/**
 * MicroCMSクラス
 */
export default class MicroCMS {

	private static _client = createClient({
		serviceDomain: SERVICE_DOMAIN,
		apiKey: API_KEY
	});;

	private _endPoint: string = "";

	constructor(endPoint: string) {
		this._endPoint = endPoint;
	}

	/**
	 * id指定で取得
	 * @param contentId
	 * @param queries
	 * @returns
	 */
	public async get<T>(contentId = "", queries = {}): Promise<T> {
		try {
			return await MicroCMS._client.get<T>({ endpoint: this._endPoint, contentId, queries });
		} catch (err) {
			throw err;
		}
	}

	/**
	 * 一覧を取得
	 * @param queries
	 * @returns
	 */
	public async getList<T>(queries = {}): Promise<MicroCMSListResponse<T>> {
		try {
			return await MicroCMS._client.getList<T>({ endpoint: this._endPoint, queries });
		} catch (err) {
			throw err;
		}
	}

}
