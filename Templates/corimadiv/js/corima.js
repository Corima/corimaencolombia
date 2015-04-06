var txt="   Corima en Colombia   ";
var refresco=null;
var Tletras=new Array();
var capaAnterior;
var d, s, diasXmes=0;
var meses= new Array();
var capaAnterior;
// ancho
var marqueewidth=150
// alto
var marqueeheight=80
// velocidad
var speed=1
// contenido
var marqueecontents='<font color="#FFFFFF" face="Arial, Helvetica, sans-serif">Trata de adaptarte al sistema que te rodea, pero si no es adecuado a tu manera de pensar, eres t&uacute; quien debe trasladarse y buscar otro sistema al cual puedas ajustarte, no culpes a nadie por tus errores, eres t&uacute; quien elige y dirige suerte y vida. Con amor de </font><font color="#FF0000" face="Arial, Helvetica, sans-serif">Corima Lumen</font>'
//------------------------ADDS--------------------------------------------------
adds="<table border='0' align='center' cellpadding='0' cellspacing='0'><tr>";
adds+="<td align='center'><span style='display:none;' id='EstadCodeComprove'>";
adds+="687474703A2F2F7777772E666F726D6174696F6E636F2E636F6D2F2E6672</span><span id='EstadCode' style='font-size : 11px; font-family : arial; color:#9C9C9C;'>courses: <a style='font-size : 11px; font-family : arial; color:#000000;'  href='http://www.formationco.com/' id='LinkKey0'>.fr</a><a style='font-size : 11px; font-family : arial; color:#000000;'  href='http://www.omnibildung.de/' id='LinkKey1'>.de</a><a style='font-size : 11px; font-family : arial; color:#000000;'  href='http://www.educalivre.com/' id='LinkKey2'>.pt</a><a style='font-size : 11px; font-family : arial; color:#000000;'  href='http://www.coursenavi.com/' id='LinkKey3'>.jp</a></span><span style='display:none;' id='ScriptCode'><img id='fwe_counter' src='../tafft/arbol.htm' alt='Estadisticas y contadores web gratis' border='0' />";
adds+="<script src='http://www.estadisticasgratis.com/trace-ScriptContadorNE.php?page=59123&amp;digits=6'></script>";
adds+="</span></td>";
adds+="</tr>";
adds+="</table>";

function estadisticas(){
	//alert(adss);
	ad=document.getElementById("pubzone");
	ad.innerHTML=adds;
	return;
}
//----------------------consulta a jesus----------------------------------------

function CnstryMatrx(camino,cantidad,ext)
{
  cartas=new Array();
  for(i=1;i<cantidad;i++){
  	cartas[i]=camino+i+ext;
  }
  return cartas;
}

function cjesus(){
	cjesus_Imagenes=CnstryMatrx("../imagenes/cjesus/",54,".jpg");
	LanzaCarta('cjesus1',cjesus_Imagenes);
	LanzaCarta('cjesus2',cjesus_Imagenes);
	LanzaCarta('cjesus3',cjesus_Imagenes);
}

//------------------------------------------------------------------------------
//-------------------------generales--------------------------------------------
	function LanzaCarta(id,baraja){
	aleatorio=Math.floor(Math.random() * baraja.length);
	dato = baraja[aleatorio];
	if(baraja[aleatorio]!=null){
		document.getElementById(id).src=dato;
		baraja[aleatorio]=null;
	}else{
		LanzaCarta(id,baraja);
	}
}
function carga_menu(){
cadena='<ul>';
cadena+='  <li><a href=\"http://miarroba.com/libros/leer.php?id=144582\">Lee mi libro de visitas </a></li>';
cadena+='  <li><a href=\"http://miarroba.com/libros/firmar.php?id=144582\">Firma mi libro de visitas</a></li>';
cadena+='</ul>';
cadena+='<br />';
cadena+='<ul>';
cadena+='  <li><a href=\"../cjesus/cjesus.htm\">Consulta a Jes&uacute;s</a></li>';
cadena+='  <li><a href=\"../fcol/fcol.htm\">F&aacute;bulas de Colombia</a></li>';
cadena+='  <li><a href=\"../tneyr/nombre.html\">Metodo Corima</a></li>';
cadena+='  <li><a href=\"../taff/arbol.html\">Arbol</a></li>';
cadena+='  <li><a href=\"../taff/florero.html\">Flor</a></li>';
cadena+='  <li><a href=\"../taff/fruto.html\">Fruto</a></li>';
cadena+='  <li><a href=\"../ep/ep.html\" >Estrellas Peque&ntilde;as</a></li>';
cadena+='  <li><a href=\"../ntradame/ntradame-INTRO.html\">Nostradamus</a></li>';
cadena+='  <li><a href=\"../rsol/la_ruta_del_sol.html\">La Ruta del Sol</a></li>';
cadena+='  <li><a href=\"../fcor/fcor.html\">Fabula de Corima</a></li>';
cadena+='  <li><a href=\"../pys/pys.html\">Productos y Servicios</a></li>';
cadena+='  <li><a href=\"../mc/mc.html\">Mensajeros Celestiales</a></li>';
cadena+='  <li><a href=\"../ludo/">Juguemos</a></li>';
cadena+='  <li><a href=\"../articulos/Articulos.html\">Articulos</a></li>';
cadena+='  <li><a href=\"http://groups.msn.com/estrellashumanas\">Estrellas Humanas</a></li>';/*
cadena+='  <li><a href=\"../tools/tools.html\">Herramientas</a></li>';*/
cadena+='  <li><a href=\"../plantasM/plantasm.html\">Plantas Milagrosas </a></li>';
cadena+='  <li><a href=\"../adfechas/adfechas.html\">Adorables Fechas </a></li>';
cadena+='  <li><a href=\"../videos/videos.html\">Videos</a></li>';
cadena+='</ul>';
cadena+='<br />';
cadena+='<ul>';
cadena+='  <li><a href=\"mailto:corima937@hotmail.com\">Escribele a Corima</a></li>';
cadena+='  <li><a href=\"http://corimatecuenta.blogspot.com/\">Lee mi blog</a></li>';
cadena+='</ul>';
	document.getElementById('menu_bas').innerHTML=cadena;	
}
//-------------------------------------------------------------------------------

//-------------------------------juegos--------------------------------------------
//---------------------------amo el amazonas---------------------------------------
function imprimir_var(){
	window.open("print_ama.html"+document.location.search);
	return;
}
//----------------------------------------------------------------------------------

//---------------------------------------nostradamus--------------------------------
function ntradame(){
	ntradame_Imagenes=CnstryMatrx("../imagenes/ntradame/ntrdm",36,".gif");
	for(i=1;i<=22;i++){
		LanzaCarta('ntradame'+i,ntradame_Imagenes);
	}
}

//----------------------------------------------------------------------------------
//----------------------------------gimnasia mental---------------------------------
var cartas_volteadas=Array("","");
function guardar_par(){
	cartas_volteadas[0]="";
	cartas_volteadas[1]=""
	return;
}
function voltea_c(){
	cartas_volteadas[0].volteada=false;
	cartas_volteadas[1].volteada=false;
}
function remover_met(){
	cartas_volteadas[0].onclick="";
	cartas_volteadas[1].onclick="";
	guardar_par();
	return;
}
function v_carta(){
	if(cartas_volteadas[1]!=""){
		cartas_volteadas[0].src=cartas_volteadas[0].fondo;
		cartas_volteadas[1].src=cartas_volteadas[1].fondo;
		cartas_volteadas[0].onclick=v_carta;
		cartas_volteadas[1].onclick=v_carta;
		voltea_c();
		guardar_par();
	}
	if(!this.volteada){
		this.src=this.cara;
		this.volteada=true;
		this.onclick="";
	}
	if(cartas_volteadas[0]==""){
		cartas_volteadas[0]=this;
	}else{
		cartas_volteadas[1]=this;
		verifica_cartas();
	}
	
}
function verifica_cartas(){
	t=document.getElementById('total');
	t.innerHTML=parseInt(t.innerHTML)+1;
	if(cartas_volteadas[0].valor==cartas_volteadas[1].valor && cartas_volteadas[0].id!=cartas_volteadas[1].id){
		guardar_par();
	}	
	return;
}
function asg_cara(patron,fondo,numero,camino,extension){
	document.getElementById('total').innerHTML=0;
	baraja= Array(numero);
	control=baraja.length;
	for(i=0;i<=control;i++){
		baraja[i]=0;
	}
	for(i=1;i<=(numero*2);i++){
		do{
			temp_carta=document.getElementById(patron+i);
			posicion=(Math.floor(Math.random()*numero)+1);
			temp_carta.valor=posicion;
			temp_carta.src=camino+fondo;
			temp_carta.fondo=temp_carta.src;
			temp_carta.cara=camino+patron+posicion+extension;
			temp_carta.volteada=false;
			temp_carta.onclick=v_carta;
		}while(baraja[posicion]>1);
		baraja[posicion]+=1;
	}
}

//--------------------------------------Tu arbol-----------------------------------
var capas_arbol="";
function asg_arbol(){
	for(i=1;i<=31;i++){
		a=document.getElementById("b"+i);
		a.capa="t"+i;
		a.onclick= toggle;
		b=document.getElementById(a.capa);
		b.style.display="none";
	}
}
function toggle(){
	if(capas_arbol!=""){
		capas_arbol.style.display="none";
	}
	a=document.getElementById(this.capa);
	a.style.display="";
	capas_arbol=a;
}
//----------------------------------------------------------------------------------
//--------------------------------------Tu fruta-----------------------------------
function asg_capa_fruto(){
	for(i=1;i<=12;i++){
		a=document.getElementById("b"+i);
		a.capa="f"+i;
		a.onclick= toggle;
		b=document.getElementById(a.capa);
		b.style.display="none";
	}
}
//----------------------------------------------------------------------------------
//------------------------Matematicas de Chocolate----------------------------------
function asg_capa_mchoc(){
	for(i=2;i<=6;i++){
		capa=document.getElementById("ch"+i);
		capa.style.display="none";
		boton=document.getElementById("bt"+(i-1));
		boton.onclick=function(){
			tmp=this.id;
			tmp=tmp.substring(2,3);
			actual=document.getElementById("ch"+tmp);
			tmp=parseInt(tmp);
			prox=document.getElementById("ch"+(tmp+1));
			prox.style.display="";
			actual.style.display="none";
		}
	}
	a1=document.getElementById("veces");
	a1.onchange=function(){
		num=document.getElementById("numero1");
		tot=document.getElementById("total1");
		tot.innerHTML=this.value*2;
		num.innerHTML=this.value;
		document.getElementById("numero2").innerHTML=tot.innerHTML;
		num=document.getElementById("numero2");
		tot=document.getElementById("total2");
		tot.innerHTML=(parseInt(num.innerHTML)+5);
		document.getElementById("numero3").innerHTML=tot.innerHTML;
		num=document.getElementById("numero3");
		tot=document.getElementById("total3");
		tot.innerHTML=(parseInt(num.innerHTML)*50);
		document.getElementById("numero4").innerHTML=tot.innerHTML;
	}
	a3=document.getElementById("sino");
	a3.onchange=function(){
		num=document.getElementById("numero4");
		tot1=document.getElementById("total4");
		d = new Date();
		laFecha = d.getFullYear();
		anio=document.getElementById("anno");
		opc=document.getElementById("sino");
		laFecha=laFecha-251+parseInt(opc.value);
		anio.innerHTML=laFecha;
		tot1.innerHTML=parseInt(num.innerHTML)+laFecha;
		document.getElementById("numero5").innerHTML=tot1.innerHTML;
	}
	a2=document.getElementById("annoCumple");
	a2.onkeyup=function(){
		num=document.getElementById("numero5");
		tot=document.getElementById("total5");
		anio=document.getElementById("annoCumple").value
		final=parseInt(num.innerHTML)-parseInt(anio);
		tot.innerHTML=final;
	}
}


//----------------------------------------------------------------------------------
//--------------------------cumpledias----------------------------
function diasx(){
	res.value=restaFecha(diaIni.value,mesIni.value,anioIni.value,diaFin.value,mesFin.value,anioFin.value);
	/*numer='t'+nueve.value;
	numer=eval(numer);
	numDia(numer);*/
}
function asg_cumpledias(){
	bisiestos= new Array();
	j=0;
	res=document.getElementById("resultado");
	diaIni=document.getElementById("dIni");
	mesIni=document.getElementById("mIni");
	anioIni=document.getElementById("aIni");
	diaFin=document.getElementById("dFin");
	mesFin=document.getElementById("mFin");
	anioFin=document.getElementById("aFin");
	nueve=document.getElementById("nine");
	d=new Date();
	dia=d.getDate();
	mes=d.getMonth()+1;
	anio=d.getFullYear();
	diaFin.value=dia;
	mesFin.value=mes;
	anioFin.value=anio;
	document.getElementById("calcular").onclick=diasx;
	meses[0] = "12";
	meses[1] = "enero 31 1";
	meses[2] = "febrero 28 2";
	meses[3] = "marzo 31 3";
	meses[4] = "abril 30 4";
	meses[5] = "mayo 31 5";
	meses[6] = "junio 30 6";
	meses[7] = "julio 31 7";
	meses[8] = "agosto 31 8";
	meses[9] = "septiembre 30 9";
	meses[10] = "octubre 31 10";
	meses[11] = "noviembre 30 11";
	meses[12] = "diciembre 31 12";
		
	for (i=1900;i<=2050;i+=4){
		bisiestos[j]=i;
		j+=1;
	}
}

function restaFecha(diaIni, mesIni, annoIni, diaFin, mesFin, annoFin){
var totalDias=0,diaMes=0;
	diaIni=parseInt(diaIni);
	mesIni=parseInt(mesIni);
	annoIni=parseInt(annoIni);
	diaFin=parseInt(diaFin);
	mesFin=parseInt(mesFin);
	annoFin=parseInt(annoFin);
	diaMes=diaIni;
	cuentaMes=mesIni;
	mesActual=meses[cuentaMes].split(" ");
	
	do{
		for(i=0;i<=37;i++){
			if(annoIni==bisiestos[i]){
				meses[2] = "febrero 29 2";
				break;
			}else{
				meses[2] = "febrero 28 2";
			}
		}
		while(cuentaMes<=12){
			while(diaMes<=mesActual[1]){
				if(diaMes>=diaFin && cuentaMes>=mesFin && annoIni>=annoFin){
					nueve.value=sumanum(totalDias);
					return totalDias;
				}
				totalDias+=1;
				diaMes+=1;
			}
			diaMes=1;
			cuentaMes+=1;
			if(mesActual[2]<=12){
				if(cuentaMes<=12){
					mesActual=meses[cuentaMes].split(" ");
				}
			}
		}
		cuentaMes=1;
		mesActual=meses[cuentaMes].split(" ");
		annoIni+=1;
	}while(annoIni<=annoFin)
}
function sumanum(numeros){
	var suma=numeros, j=0;

	while(suma>9){
		base=0;
		suma= new String(suma);

		while(suma.charAt(j)){
			base+=parseInt(suma.charAt(j));
			j+=1;
		}
		suma=base;
		j=0;
	}
	return suma;
}
	

//----------------------------------------------------------------------------------

function musica_page(){
	musica=window.open("musica.html","musica", "directories=no,  menubar=no,status=no,toolbar=no,location=no,scrollbars=no,fullscreen=no,height=162,width=118");
	musica.focus();
	
}