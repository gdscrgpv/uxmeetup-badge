
const downloadCharacterSheet = () => {
  
  const node = document.getElementById('id-card');
  
  html2canvas(node).then(canvas => {
    // document.body.appendChild(canvas)
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
  });
  
};

const bindInputToElement = (inputEl, elementEl) => {
  inputEl.addEventListener('change', () => {
    elementEl.textContent = inputEl.value;
  });
}
var namechange= document.getElementById('change-name');
var inputchange=document.getElementById('name');

inputchange.addEventListener("input",function(){
  namechange.innerHTML=inputchange.value;
})

document
  .getElementById('download-button')
  .addEventListener('click', downloadCharacterSheet);

// Bind mugshot
document
    .getElementById('mugshot')
    .addEventListener('change', function() {
      if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           var img = document.getElementById('id-card-mugshot');
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
      }
    });


