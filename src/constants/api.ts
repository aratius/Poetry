import { Dictionary } from "src/types/common";

export const API_KEY = process.env.MICROCMS_API_KEY || "";
export const SERVICE_DOMAIN = process.env.MICROCMS_SERVICEDOMAIN || "";

export const API: Dictionary<string> = {
	ABOUT: "about",
	WORKS: "works",
};