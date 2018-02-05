function buttonCopyClick(e){
	e.stopPropagation();
    var trBlock = $(e.target).parent().parent();
	var text = trBlock.find(":nth-last-child(2)").html();
	var re = /Код:\s(\d+)/;
	var matches = text.match(re);
	if (!matches) return;
	var code = matches[1];
	var copyTemp = $("#copyTemp");
	copyTemp.val(code);
	copyTemp.select();
	try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
	} catch (err) {
    console.log('Oops, unable to copy');
  }
 }

function onShowTable(){
	$("#tableSms>tbody>tr").append('<th class="sorting_disabled" tabindex="0" rowspan="1" colspan="1"><button class="btn">&nbsp;</button></th>');
	$("#tableSms>tbody>tr>th>button").click(buttonCopyClick);
}	

$("#tableSms>thead>tr").append('<th class="sorting_disabled" tabindex="0" rowspan="1" colspan="1">В буфер</th>');
$(document).find("body").append('<input type="text" id="copyTemp" style="opacity:0;filter:alpha(opacity=0);">');
$("#tableBlock").on("show", onShowTable);
$( document ).ajaxComplete(onShowTable);