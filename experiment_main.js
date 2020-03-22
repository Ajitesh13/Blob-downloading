let downloadbtn = document.getElementById('download');
downloadbtn.addEventListener('click', () => {
    const obj = {hello: 'world'};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type: "text/json"});
    downloadFile(blob, "newFile.json");
});

function downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    // before click we need to add some prop to "a" tag
    a.href = url;
    a.download = filename;
    // click event
    a.click();

}