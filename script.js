Array.from(document.getElementsByTagName("p"))
    .filter(element => !!element.align
        ? element.align !== "center" && element.align !== "right"
        : element.style.textAlign !== "center" && element.style.textAlign !== "right"
    )
    .forEach(element => {
        if (!!element.align) element.align = "justify"
        else element.style.textAlign = "justify"
    })
