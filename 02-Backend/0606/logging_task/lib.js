import fs from "node:fs";
import fsPromise from "node:fs/promises";
import { url } from "node:inspector";

export const logging = async (logType, value) => {
	const date = new Date();
	try {
		const logDirUrl = new URL("./logs", import.meta.url);
		!fs.existsSync(logDirUrl)
			? await fsPromise.mkdir(logDirUrl, { recursive: true })
			: null;

		const logDataUrl = new URL("./logs/log.txt", import.meta.url);

		let logTypeUrl;

		switch (logType) {
			case "error":
				logTypeUrl = new URL("./logs/errorlog.txt", import.meta.url);
				break;
			case "warn":
				logTypeUrl = new URL("./logs/warnlog.txt", import.meta.url);
				break;
			case "info":
				logTypeUrl = new URL("./logs/infolog.txt", import.meta.url);
				break;
			default:
				console.error("logType existiert nicht -> error, info, warn");
				break;
		}
		const logTxt = `${logType}-Log: ${date}: - ${value} \n\n`;

		fs.existsSync(logTypeUrl)
			? fs.appendFileSync(logTypeUrl, logTxt)
			: fs.writeFileSync(logTypeUrl, logTxt, { encoding: "utf-8" });

		fs.existsSync(logDataUrl)
			? fs.appendFileSync(logDataUrl, logTxt)
			: fs.writeFileSync(logDataUrl, logTxt, {
					encoding: "utf8",
			  });
	} catch (err) {
		console.log(err);
	}
};
