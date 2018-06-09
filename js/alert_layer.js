var signInBtn=document.getElementById('signInBtn');
var signUpBtn=document.getElementById('signUpBtn');

var signForm=document.getElementById('signForm');
var backdrop=document.getElementById('backdrop');

var headSignIn=document.getElementById('headSignIn');
var headSignUp=document.getElementById('headSignUp');

var remindUserName=document.getElementById('remindUserName');
var remindPassWd=document.getElementById('remindPassWd');
signInBtn.onclick=function () {
    signForm.style.display='block';
    backdrop.style.display='block';
    headSignIn.style.color='red';
}
signUpBtn.onclick=function () {
    signForm.style.display='block';
    backdrop.style.display='block';
    headSignUp.style.color='red';
}
var cancel=document.getElementsByClassName('icon-cancel')[0];
backdrop.onclick=turnOffForm;
cancel.onclick=turnOffForm;

function turnOffForm() {
    signForm.style.display='none';
    backdrop.style.display='none';
}
headSignIn.onclick=function () {
    headSignIn.style.color='red';
    headSignUp.style.color='black';
}
headSignUp.onclick=function () {
    headSignUp.style.color='red';
    headSignIn.style.color='black';
}

function validate() {
    var username=document.getElementById('checkUserName').value;
    var passwd=document.getElementById('checkPassWd').value;

    var isPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
    var isEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var isPasswd=  /^[A-Za-z0-9]{6,16}$/;
    if(!isPhone.test(username) && !isEmail.test(username)){
        remindUserName.innerText='请输入正确的手机号或邮箱';
        remindUserName.style.color='red';
    }else{
        remindUserName.innerText='用户名有效'
        remindUserName.style.color='red';
    }
    if(!isPasswd.test(passwd)){
        remindPassWd.innerText='请输入有效的密码';
        remindPassWd.style.color='red';
    }
}


//悬停触发下载App二维码弹出层
var app=document.getElementById('app');
var scan=document.getElementById('scan');

app.onmouseenter=function () {
    scan.style.display='block';
}
app.onmouseleave=function () {
    scan.style.display='none';
}
