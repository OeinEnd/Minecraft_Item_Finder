function search(input){
    let itemTable = document.getElementsByClassName("itemTable")[0];

    itemTable.innerHTML = "";

    for(let i = 0;i < itemList.length;i++){
        let item = itemList[i];

        if(item.name.startsWith(input.value)){
            console.log(item);
            let tr = document.createElement("tr");
            let td = document.createElement("td");

            let img = document.createElement("img");
            img.src = item["img"];

            img.classList.add("TdImg");

            tr.append(img);

            let name = document.createElement("div");

            name.innerText = "   " + item["name"];

            td.append(name);

            td.style.marginLeft = "10%";
            td.style.width = "100%";

            tr.append(td);

            itemTable.append(tr);
        }
    }

    console.log("----------\n\n");
}

search(document.getElementById("search"));