function minus(n){
    var num = Number(document.getElementsByClassName("output_num")[n].value);
    if(num>=1){
        document.getElementsByClassName("output_num")[n].value = num-1;
    }
    else
        alert("商品不能為負數")
    
}

function add(n){
    var num = Number(document.getElementsByClassName("output_num")[n].value);
    if(num<=999){
        document.getElementsByClassName("output_num")[n].value = num+1;
    }
    else
        alert("商品不足")
}

function checkout(){
    window.location.href="check_out.html";
}