import axios from "axios";

export function fetchWithProgress<T>(url: string, onProgress?: (progress: number) => void): Promise<T> {
	return new Promise((resolve, reject) => {
		void axios.get<T>(url, {
			onDownloadProgress: e => {
				if (e.lengthComputable && e.total && onProgress) {
					onProgress((e.loaded / e.total) * 100);
				}
			},
		}).then(res => {
			if (onProgress) onProgress(100);
			if (res.status !== 200) {
				reject(new Error(`Request failed with status code ${res.status}`));
				return;
			} else {
				resolve(res.data);
			}
		});
	});
}