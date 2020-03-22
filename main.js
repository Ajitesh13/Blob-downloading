// 1. create a blob
// 2. function accepts blob and file name
// 3. create url from blob
// 4. anchor tag to download
// 5. click event
// 6. remove anchor tag and blob

let download = document.getElementById('download');
download.addEventListener('click', () => {
    const blob = new Blob(['This is a new File'], {type: "text/plain"});
    downloadFile(blob, "newFile.txt");
});

function downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
}