window.onload = function(){
	var commentTable = document.getElementById("hnmain").rows[2].cells[0].getElementsByTagName("table")[1];
	var tableRows = commentTable.rows;
	var parentRowNumber;

	for(i = 0;i<(tableRows.length-1);i++) {

		var row = commentTable.rows[i];
		if (row.cells[0].getElementsByTagName("table")[0].rows[0].cells[0].offsetWidth==2) {
			
			parentRowNumber=i
			var a = document.createElement('a');
			a.innerHTML='[-]';
			a.onclick = function(){ hideRow(this.dataset.row,this); return false; };	
			a.setAttribute("data-row",i);

			var firstDiv = getCommentCellByRow(i).firstChild;
			firstDiv.insertBefore(a, firstDiv.firstChild);

		} else {
			row.className += " cc_"+parentRowNumber;
		}
	}
}

function getCommentCellByRow(row) {
	return commentTable.rows[row].cells[0].getElementsByTagName("table")[0].rows[0].cells[2];
}

function hideRow(row,link){
	
	var hide = (link.dataset.visible=="true");
	var display = hide ? "none" : "";

	var elements = document.getElementsByClassName("cc_"+row);
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = display;
    }

	var commentCell = getCommentCellByRow(row);
	commentCell.getElementsByTagName("span")[4].style.display = commentCell.getElementsByTagName("div")[1].style.display = display;
	link.innerHTML = link.dataset.visible ? "[-]" : "[+]";
	link.dataset.visible = !hide;

}
