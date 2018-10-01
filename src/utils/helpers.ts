import { detect } from "detect-browser";
import { lifecycle } from "recompose";

export const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

export const validateMessage = (msg) => String(msg).length > 60;

export const updateMetaTitle = (title: string, component) => {
	return lifecycle({
		componentDidMount() {
			document.title = `Benya Burnett | ${title}`;
		},
	})(component);
};

export const sortProjects = (proJects: any[]) => {
	proJects.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	proJects.forEach((pro) => {
		pro.projects.sort();
	});
	return proJects;
};

const _getBrowserMajorVersion = (version) => {
	console.log("version", version);
	if (version) {
		const versionNumbers = version.split(".");
		if (versionNumbers.length) {
			return parseInt(versionNumbers[0].replace(/[^0-9]/g, ""), 10);
		}
	}
	return null;
};

export const isBrowserNotSupported = () => {
	const browser = detect();

	if (browser && browser.name && browser.version) {
		const majorVersion = _getBrowserMajorVersion(browser.version);

		if (majorVersion) {
			switch (browser.name) {
				case "chrome":
					if (majorVersion <= 50) {
						return true;
					}
					return false;
				case "firefox":
					if (majorVersion <= 50) {
						return true;
					}
					return false;
				case "safari":
					if (majorVersion <= 10) {
						return true;
					}
					return false;
				case "ie":
					if (majorVersion <= 11) {
						return true;
					}
					return false;
				case "edge":
					if (majorVersion <= 11) {
						return true;
					}
					return false;
				default:
					return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
};
