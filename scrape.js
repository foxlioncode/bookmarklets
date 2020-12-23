function scrape() {
    let linksObj = document.getElementsByTagName("a");

    for (let links of linksObj) {
        console.log(links.text);
        console.log(links.href);
    }
}

scrape();