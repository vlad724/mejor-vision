function mostraralertaingreso(){
	alert('datos ingresados correctamente');
}
function mostraralertareset(){
	alert('restablecio datos del formularios de ingreso');
}
function hacerclickregistro(){
	document.getElementsByTagName('button')[1].onclick=mostraralertaingreso; 
}
function hacerclickformateo(){
	document.getElementsByTagName('button')[0].onclick=mostraralertareset; 
}
window.onload=hacerclickregistro;
window.onload=hacerclickformateo;