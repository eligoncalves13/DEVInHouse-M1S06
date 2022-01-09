const div = document.querySelector('div');

function dropHandler(ev) {
    console.log('File(s) dropped');
  
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }

    div.style.opacity = '';
    div.style.border = '';

}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    ev.preventDefault();

    div.style.opacity = '0.5';
    div.style.border = '3px dotted #457296';
}

function leaveHandler(ev) {
    console.log('File(s) out drop zone');

    ev.preventDefault();

    div.style.opacity = '';
    div.style.border = '';
}