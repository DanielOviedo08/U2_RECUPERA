

document.getElementById("agregarReceta").onclick = function () {

    var id_text = document.getElementById("id").value;
    var td_id_node = document.createElement("td");
    var id_text_node = document.createTextNode(id_text);
    td_id_node.appendChild(id_text_node);
    var td_name_node = document.createElement("td");
    
    var ele_a = document.createElement("a");
    ele_a.setAttribute("href","javascript:void(0);");
    ele_a.setAttribute("onclick","del_tr(this);");
}





