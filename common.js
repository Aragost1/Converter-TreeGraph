//file xml close
function fileXmlClose(fxml,snomore,n){
if (snomore !== "") fxml.WriteLine(snomore + '</n>');
while (n>0) {
    fxml.Write( '</n>');
	n--;
}
fxml.WriteLine('</tree>');
fxml.Close();
}

//file xml start
function fileXmlStart(fxml){
fxml.WriteLine('<?xml version="1.0" encoding="'+sCharset+'"?>');
fxml.WriteLine('<?xml-stylesheet href="view.xsl" type="text/xsl"?>');
fxml.WriteLine('<tree b="root">');
}

//Wrap string to line
function WrapLine(s,flagWrap,flagWrapMin){
var i,flag;
var line = "";
while ((s.length) > flagWrap) {
	i = flagWrap;
	flag = true;
	while (flag&&(i>flagWrapMin)) {
		if (" 	-(\\/<,|[{".indexOf(s.charAt(i),0)>=0) flag = false;
		else i--;
	}
	if (i == flagWrapMin) i = flagWrap;
	line = line + s.substr(0,i) + '\x0D\x0A';
	s = s.substr(i);}
line = line + s;
return(line);
}

//text2xmltext
function XmlFormat(s) {
return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;").replace(/\x5C/g, "\\\\");
}

//text2xmlattrtextNoSlash
function XmlAttrFormatNoSlash(s) {
return s.replace(/\x5C/g, "\\\\");
}

//text2xmlattrtext
function XmlAttrFormat(s) {
return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;");
}


function skipWhite(str) {
iStr = 0;
while ((iStr<str.length) && ((str.charAt(iStr)==" ")||(str.charAt(iStr)=="	"))) iStr++;
return iStr
}

function isCapLetter(ch) {
return (((ch >= "A") && (ch <= "Z")) || ((ch >= "À") && (ch <= "ß")))
}

function isDigit(ch) {
return (((ch >= "0") && (ch <= "9")))
}

function IsEmpty(str) {
iStr=0;
while ((iStr<str.length)&&((str.charAt(iStr) == " ")||(str.charAt(iStr) == "	"))) iStr++;
return (iStr == str.length);
}

function Words(str) {
i1=0;
while ((i1<str.length)&&((str.charAt(i1) == " ")||(str.charAt(i1) == "	"))) i1++;
i2=str.length;
while ((i2>0)&&((str.charAt(i2) == " ")||(str.charAt(i2) == "	"))) i2--;
return str.substr(i1,i2-i1);
}