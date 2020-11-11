function volume()
{
    var t_val=document.getElementById("txt").value;
    var rad=parseInt(t_val);
    var vol=(4.0/3.0)*Math.PI*Math.pow(rad,3);
    alert("Volume = "+vol);
}