function draw(){
    var canvas = document.getElementById('figure');
    if(canvas.getContext){
        var cn = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 45;
        cn.beginPath();
        cn.arc(x,y,radius,0,2 * Math.PI, false);
        cn.lineWidth = 3;
        cn.strokeStyle = '#FF0000';
        cn.stroke();
    }
}