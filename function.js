const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const user_ip = document.getElementById("user_ip");
const mySubmit = document.getElementById("mySubmit");
function c_f(temp){
    let value = temp;
    return ((9/5) * value + 32);
}
function f_c(temp){
    let value = temp;
    return ((5/9) * (value - 32));
}
mySubmit.onclick = function(){
    if(!isNaN(user_ip.value)){
        let temp = Number(user_ip.value);
        if(r1.checked){
            let r1_value = c_f(temp);
            document.getElementById("status").textContent = `${r1_value}°F`;
        }
        else if(r2.checked){
            let r2_value = f_c(temp);
            document.getElementById("status").textContent = `${r2_value}°C`;
        }
        else{
            document.getElementById("status").textContent = `SELECT ANY CONVERSION`;
        }
    }
    else{
        document.getElementById("status").textContent = `ENTER TEMPERATURE`;
    }
}