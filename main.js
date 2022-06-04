function changeText2() {
  const list = document.getElementById('demo');
  const shell = "root@krabcli $  "
  const firstname =   document.getElementById('firstname').value;
  const entry = document.createElement('li');
  list.appendChild(entry);
  entry.appendChild(document.createTextNode(shell + firstname));
  document.getElementById('firstname').value = ''
}