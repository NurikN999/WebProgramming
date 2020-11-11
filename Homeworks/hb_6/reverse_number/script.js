function reverse(){
    let n = document.getElementById("number").value;
    num1 = n.toString().split('');
    reverse = num1.reverse();
    finalResult = reverse.join('');
    alert(parseFloat(finalResult))
}