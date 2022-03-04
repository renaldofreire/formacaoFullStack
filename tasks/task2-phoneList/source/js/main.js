function deleteRow(no) {
    document.getElementById("row"+no+"").outerHTML="";
}

function editRow(no) {
    document.getElementById("editButton"+no).style.display="none";
    document.getElementById("saveButton"+no).style.display="block";

    let name=document.getElementById("nameRow"+no);
    let phone=document.getElementById("phoneRow"+no);

    let nameData=name.innerHTML;
    let phoneData=phone.innerHTML;

    name.innerHTML="<input type='text' id='nameText"+no+"' value='"+nameData+"'>";
    phone.innerHTML="<input type='text' id='phoneText"+no+"' value='"+phoneData+"'>";
}

function saveRow(no) {
    let nameValue=document.getElementById("nameText"+no).value;
    let phoneValue=document.getElementById("phoneText"+no).value;

    document.getElementById("nameRow"+no).innerHTML=nameValue;
    document.getElementById("phoneRow"+no).innerHTML=phoneValue;

    document.getElementById("editButton"+no).style.display="block";
    document.getElementById("saveButton"+no).style.display="none";
}

function addRow() {
    let newName=document.getElementById("newName").value;
    let newPhone=document.getElementById("newPhone").value;

    let table=document.getElementById("dataTable");
    let tableLen=(table.rows.length)-1;
    let row = table.insertRow(tableLen).outerHTML="<tr id='row"+tableLen+"'><td id='nameRow"+tableLen+"'>"+newName+"</td><td id='phoneRow"+tableLen+"'>"+newPhone+"</td><td><input type='button' id='editButton"+tableLen+"' value='Editar' class'edit' onclick='editRow("+tableLen+")'> <input type='button' id='saveButton"+tableLen+"' value='Salvar' class='save' onclick='saveRow("+tableLen+")'> <input type='button' value='Deletar' class='delete' onclick='deleteRow("+tableLen+")'></td></tr>";

    document.getElementById("newName").value="";
    document.getElementById("newPhone").value="";
}
