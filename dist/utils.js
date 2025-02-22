export function fetchWithProgress(url, onProgress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("progress", e => {
            if (e.lengthComputable && onProgress)
                onProgress((e.loaded / e.total) * 100);
        });
        xhr.addEventListener("load", () => {
            if (onProgress)
                onProgress(100);
            resolve(JSON.parse(xhr.responseText));
        });
        xhr.addEventListener("error", reject);
        xhr.send();
    });
}
//# sourceMappingURL=utils.js.map