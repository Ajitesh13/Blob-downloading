// 1. create a blob
// 2. function accepts blob and file name
// 3. create url from blob
// 4. anchor tag to download
// 5. click event
// 6. remove anchor tag and blob

function download() {
    const blob = new Blob(['This is a new File'], {type: "text/plain"});
    downloadFile(blob, "newFile.txt");
}

function downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    // before click we need to add some prop to "a" tag
    a.href = url;
    a.download = filename;

    //step5: click event
    a.click();

}