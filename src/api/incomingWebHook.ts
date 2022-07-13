import { INCOMING_WEBHOOK_URL } from "src/constants/api";

export const sendMessage = async (message: string): Promise<void> => {
	await fetch(INCOMING_WEBHOOK_URL, {
		method: "POST",
		body: JSON.stringify({
			text: message
		})
	});
};