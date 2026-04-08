export function lastModify() {
    const date = new Date();
    let lastModified = date.toLocaleDateString("en-US");
    let lastModifyString = `Last Updated: ${lastModified}`;
    document.querySelector("#latestModified").textContent = lastModifyString;
}

export function copyRight(arr) {
    const date = new Date();
    const currentYear = date.getFullYear();
    document.querySelector("#yearcopyright").textContent =
      currentYear.toString();
}
