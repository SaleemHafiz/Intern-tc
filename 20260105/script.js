import { TAGS } from "./data.js";

const tagList = document.getElementById("list")
TAGS.forEach(tag => {
    const listItem = document.createElement("div")
    listItem.classList.add('list-item')
    listItem.innerText = tag
    tagList.appendChild(listItem)
})