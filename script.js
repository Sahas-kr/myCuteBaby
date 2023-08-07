//NavBar responsive

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



//Image area display

const imgArea = document.querySelector('.img-area');
const inputFile = document.querySelector('#file');

inputFile.addEventListener('change',() => {
	const image = this.files[0]
	if(image.size < 5000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 5MB");
	}
})

//Form Validation

const babyName = document.querySelector('#babyName');
const mobileNo = document.querySelector('#mobileNo');
const emailId = document.querySelector('#emailId');
const submitBtn = document.querySelector('#submitBtn');
const errorMsg = document.querySelector('.errorMsg');

submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();

    if((babyName,mobileNo,emailId).value.trim() ===''){
        error(errorMsg, 'ERROR! All fields are mandatory')
    }else if(babyName.value.trim()===''){
        error(errorMsg, 'ERROR! Baby Name cannot be empty.')
    }else if(mobileNo.value.trim() === ''){
        error(errorMsg, 'ERROR! Mobile number cannot be empty.')
    }else if(emailId.value.trim() === ''){
        error(errorMsg, 'ERROR! Email ID cannot be empty.')
    }
    else{
        success(errorMsg)
    }
})


function error(element, msg){
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.display = 'inline-block';
}
function success(element){
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.display = 'none';
    setTimeout(()=>{
        alert("Entry Successful")
    },200)
}