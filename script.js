// bai 1
function calculateFactorial(a){
    let result=1;
    if(a>0){
        for(let i=1;i<=a;i++){
            result*=i;
        }
        return result;
    }else if(a==0){
        return 1;
    }else{
        return "Invalid"
    }
}
console.log(calculateFactorial(5))
// bai 2
function reverseString(str){
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("hello"))
// bai 3
function translate(str){
    switch(str){
        case "VN":{
            return "Xin chao`";
        }
        case "EN":{
            return "Hello";
        }
    }
}
console.log(translate("VN"))
// bai4
function subString(str){
    let subStr="";
    if(str.length<15){
        return "Invalid"
    }else{
        for(i=0;i<10;i++){
            subStr += str.charAt(i);
        }
        return `${subStr}...`;
    }
}
console.log(subString("xinchaocacbandenvoiTechmaster"))