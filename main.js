const uploadBtn = document.getElementById('upload-btn');
const downloadBtn = document.getElementById('download-btn');
const uploadedImage = document.getElementById('uploaded-image');
const name = document.getElementById('name');
const title = document.getElementById('title');
const company = document.getElementById('company');

uploadBtn.addEventListener('click', function() {
	const input = document.createElement('input');
	input.type = 'file';
	input.accept = 'image/*';
	input.onchange = function() {
		const file = this.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function() {
				uploadedImage.src = reader.result;
			}
			reader.readAsDataURL(file);
		}
	}
	input.click();
});

downloadBtn.addEventListener('click', function() {
	if (uploadedImage.src === '#') {
		alert('Please upload an image before downloading your badge.');
		return;
	}
	
	downloadBtn.disabled = true;
	
	html2canvas(document.querySelector('.badge')).then(canvas => {
		const dataURL = canvas.toDataURL();
		const link = document.createElement('a');
		link.download = 'badge.png';
		link.href = dataURL;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		downloadBtn.disabled = false;
	});
});

name.addEventListener('input', function() {
	name.innerHTML = `Name: ${this.value}`;
});

title.addEventListener('input', function() {
	title.innerHTML = `Title: ${this.value}`;
});

company.addEventListener('input', function() {
	company.innerHTML = `Company: ${this.value}`;
});
