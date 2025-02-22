export function fetchWithProgress<T>(url: string, onProgress?: (progress: number) => void): Promise<T> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.addEventListener("progress", e => {
			if (e.lengthComputable && onProgress) onProgress((e.loaded / e.total) * 100);
		});
		xhr.addEventListener("load", () => {
			if (onProgress) onProgress(100);
			resolve(JSON.parse(xhr.responseText) as T);
		});
		xhr.addEventListener("error", reject);
		xhr.send();
	});
}