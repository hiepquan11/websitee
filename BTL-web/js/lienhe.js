// Truy cập vào các ô input
const Name = document.getElementById('username');
const Email = document.getElementById('email');
const Tel = document.getElementById('tel');
const Subject = document.getElementById('subject');

// Validate dữ liệu trong các ô input và highlight
function checkValidate() {
    let usernameValue = Name.value;
    let emailValue = Email.value;
    let phoneValue = Tel.value;
    let subjectValue = Subject.value;

    let isCheck = true;

    // Kiểm tra trường username
    if (usernameValue == '') {
        setError(Name, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(Name);
    }

    // Kiểm tra trường email
    if (emailValue == '') {
        setError(Email, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(Email, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(Email);
    }

    // Kiểm tra trường phone
    if (phoneValue == '') {
        setError(Tel, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(Tel, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(Tel);
    }

    return isCheck;
}
const btnRegister = document.getElementById('btn-box');

btnRegister.addEventListener('click', function() {
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});