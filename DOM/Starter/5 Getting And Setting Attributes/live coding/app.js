// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a);
console.log(a.href);
console.log((a.href = "https://www.youtube.com/watch?v=H3XIJYEPdus&list=PLSDeUiTMfxW4zCLgOQgz4PWSN0QRmUUFR"));
const input = document.querySelector('input');
console.log(input);
console.log(input.value);
console.log(input.type);

const input1 = document.querySelector('#password');
console.log(input1.value =" Enter strong password")
//Show password checkbox code
const passwordInput = document.getElementById('password');
const showPasswordCheckBox = document.querySelector('#showPassword')

showPasswordCheckBox.addEventListener('change', function () {
    passwordInput.type = this.checked ? "text" :"password";
});


//Getting Attributes
