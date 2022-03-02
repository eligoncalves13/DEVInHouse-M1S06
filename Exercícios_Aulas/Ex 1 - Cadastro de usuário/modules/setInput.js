import { 
    nameInput,
    imgInput,
    descriptionInput,
    userImg,
    userName,
    userDescription} from './selectors.js';

const setValue = () => {
    if(nameInput.value && imgInput.value && descriptionInput.value){
        userName.innerHTML = nameInput.value;
        userImg.src = imgInput.value;
        userDescription.innerHTML = descriptionInput.value;
    }else{
        alert('Digite seus dados!');
    }
}

export default setValue;