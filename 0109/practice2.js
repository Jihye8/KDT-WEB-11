function add() {
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('text').value;
    let tbodt = document.getElementsByTagName(tbody);
    //tr
    let tr = document.createElement('tr');
    //td
    let tdNumber = document.createElement('td');
    let tdWriter = document.createElement('td');
    tdWriter.innerText = writer;
    let tdContent = document.createElement('td');
    tdContent.innerText = content;
    let tdDate = document.createElement('td');
    let now = new Date();
    tdDate.innerText = `${now.getFullYear()}-${
        now.getMonth() + 1
    }-${now.getDate()}-${now.getHours()}:${now.getMinutes()}`;
    console.log(tdDate);
    tr.append(tdWriter, tdContent, tdDate);
    tbody.append(tr);
}
