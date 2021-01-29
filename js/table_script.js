// reference add, edit, save, delete : http://talkerscode.com/webtricks/add-edit-and-delete-rows-from-table-dynamically-using-javascript.php

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var title = document.getElementById("title_row" + no);
  var content = document.getElementById("content_row" + no);
  var tag = document.getElementById("tag_row" + no);
  var date = document.getElementById("date_row" + no);

  var title_data = title.innerHTML;
  var content_data = content.innerHTML;
  var tag_data = tag.innerHTML;
  var date_data = date.innerHTML;

  title.innerHTML = "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
  content.innerHTML = "<input type='text' id='content_text" + no + "' value='" + content_data + "'>";
  tag.innerHTML = "<input type='text' id='tag_text" + no + "' value='" + tag_data + "'>";
  date.innerHTML = "<input type='date' id='date_text" + no + "' value='" + date_data + "'>";
}

function save_row(no) {
  var title_val = document.getElementById("title_text" + no).value;
  var content_val = document.getElementById("content_text" + no).value;
  var tag_val = document.getElementById("tag_text" + no).value;
  var date_val = document.getElementById("date_text" + no).value;

  document.getElementById("title_row" + no).innerHTML = title_val;
  document.getElementById("content_row" + no).innerHTML = content_val;
  document.getElementById("tag_row" + no).innerHTML = tag_val;
  document.getElementById("date_row" + no).innerHTML = date_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
  var new_title = document.getElementById("new_title").value;
  var new_content = document.getElementById("new_content").value;
  var new_tag = document.getElementById("new_tag").value;
  var new_date = document.getElementById("new_date").value;

  var table = document.getElementById("data_table");
  var table_len = (table.rows.length) - 1;
  var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='title_row" + table_len + "'>" + new_title + "</td><td id='content_row" + table_len + "'>" + new_content + "</td><td id='tag_row" + table_len + "'>" + new_tag + "</td><td id='date_row" + table_len + "'>" + new_date + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'> <input type='button' id='view_button" + table_len + "' value='View' class='view' onclick='view_row(" + table_len + ")'> </td></tr>";

  document.getElementById("new_title").value = "";
  document.getElementById("new_content").value = "";
  document.getElementById("new_tag").value = "";
  document.getElementById("new_date").value = "";
}

//reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
function view_row(no) {

  document.createElement('template')
  // Instantiate the table with the existing HTML tbody and the row with the template
  var tbody = document.querySelector('#blog_result');
  var template = document.querySelector('#productrow');

  var clonetitle = template.content.cloneNode(true);
  var tr = clonetitle.querySelectorAll("tr");
  tr[0].textContent = "VIEW SELECTED BLOG: ";
  tbody.appendChild(clonetitle);

  //Clone the new row and insert it into the table
  var clone = template.content.cloneNode(true);
  var tr = clone.querySelectorAll("tr");
  tr[0].textContent = " TITLE: " + document.getElementById("title_row" + no).innerHTML + "\xa0\xa0 DATE: " + document.getElementById("date_row" + no).innerHTML;
  tr[1].textContent = document.getElementById("content_row" + no).innerHTML;
  tr[2].textContent = '\xa0';
  tr[3].textContent = " ADDITIONAL INFORMATION: ";
  tr[4].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in faucibus diam. Cras et metus non velit iaculis cursus. Suspendisse sit amet diam ut quam ullamcorper commodo eu a nunc. Vestibulum ac lacinia diam. Maecenas ipsum enim, sollicitudin ac nisl sit amet, interdum faucibus arcu. Suspendisse non placerat felis. Nullam volutpat magna vitae quam efficitur, eu auctor nulla sodales. Nunc eleifend lacinia ante luctus volutpat. Vestibulum pharetra mattis urna sed gravida. Cras vehicula venenatis efficitur. Praesent euismod eros et nulla pharetra fringilla. Morbi interdum ligula eget dolor maximus, sit amet ullamcorper nisl tempor. Duis vitae dui sed risus mattis vehicula sit amet vel mauris. In ut sem rutrum, dignissim nulla at, blandit ante.";
  tr[5].textContent = "TAGS:  " + document.getElementById("tag_row" + no).innerHTML;
  tr[6].textContent = '\xa0';

  //template table style
  const style = document.createElement('style');
  style.textContent = `
        .wrapper_view { padding: 40px; border: 1px solid gray; background-color: rgba(255, 175, 189, 0.7) }
        .temp { font-weight: bold; font-size: large; }
        .temp2 { color: darkred; font-size: large; font-weight: bold;}
        .temp3 { text-decoration: underline;}
        .temp4 { height: 50px; border-bottom: 2px solid white; color: grey; font-size: large; }
        `;

  tbody.appendChild(style);

  tbody.appendChild(clone);

}


