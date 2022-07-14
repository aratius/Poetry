import { INCOMING_WEBHOOK_URL } from "src/constants/apis";

export const sendMessage = async (text: string): Promise<void> => {
	const res = await fetch(INCOMING_WEBHOOK_URL, {
		method: "POST",
		mode: "no-cors",
		// headers: {
		// 	"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		// 	// "Access-Control-Origin": "no-cors"
		// },
		body: JSON.stringify({ text })
	});
	console.log(res);
};