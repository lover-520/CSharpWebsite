var OxO4d84=["contains","parentNode","selection","document","type","None","Text","body","rangeCount","window","Control","anchorOffset","childNodes","anchorNode","isCollapsed","focusNode","length","nodeType","nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","top","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","iframe","editor","img","onload","src","","src_cetemp","contentEditable","designMode","on","clearAttributes","marginTop","0","marginLeft","color","black","background","white","unselectable","2D-Position","LiveResize","outerHTML","innerHTML","useMap","MAP","name","#","areas","href","target","alt","coords",",","\x3Cimg id=\x27myIMAGE","\x27 border=1 src=\x27Load.ashx?type=image\x26file=space.gif\x27 alt=\x27[[AddLinktoImageMap]]\x27 style=\x27position:absolute;left:","px;top:","px;width:","px;height:","px;z-index:","\x27\x3E","Load.ashx?Type=Dialog\x26file=MapLink.htm","dialogWidth:350px;dialogHeight:212px;help:no;scroll:no;status:no;resizable:0;","frameloaded","zoom","height","width","\x27  border=1 src=\x27Load.ashx?type=image\x26file=space.gif\x27 alt=\x27[[AddLinktoImageMap]]\x27 style=\x27position:absolute;z-index:",";width:20;height:20;left:",";top:","myIMAGE","\x3Carea shape=\x27rect\x27 coords=\x27","\x27","href=\x27","\x27 ","target=\x27","alt=\x27","\x3E","PasteHTML","\x3Cmap name=\x27","\x3C/map\x3E","off","AutoMap","display","img_zoom_in","none","img_zoom_out","img_bestfit","img_actualsize"]; function Element_Contains(element,Ox231){if(!Browser_IsOpera()){if(element[OxO4d84[0x0]]){return element.contains(Ox231);} ;} ;for(;Ox231!=null;Ox231=Ox231[OxO4d84[0x1]]){if(element==Ox231){return true;} ;} ;return false;}  ; function Window_CreateSelectionRange(Ox1bd){var range;if(Browser_UseIESelection()){var Ox22a=Ox1bd[OxO4d84[0x3]][OxO4d84[0x2]];if(Ox22a[OxO4d84[0x4]]==OxO4d84[0x5]||Ox22a[OxO4d84[0x4]]==OxO4d84[0x6]){ range=Ox22a.createRange() ;} else { range=document[OxO4d84[0x7]].createTextRange() ; range.moveToElement(Ox22a.createRange().item(0x0)) ;} ;} else {var Ox22a=Ox1bd.getSelection();if(Ox22a[OxO4d84[0x8]]==0x0){ range=Ox1bd[OxO4d84[0x3]].createRange() ;} else { range=Ox22a.getRangeAt(0x0).cloneRange() ;} ;} ; range[OxO4d84[0x9]]=Ox1bd ;return range;}  ; function Window_GetSelectionNode(Ox1bd){var Ox231=Window_GetSelectionNode_Core(Ox1bd);if(Ox231==Ox1bd[OxO4d84[0x3]][OxO4d84[0x7]]){return null;} ;if(!Element_Contains(Ox1bd[OxO4d84[0x3]].body,Ox231)){return null;} ;return Ox231;}  ; function Window_GetSelectionNode_Core(Ox1bd){var Ox22a;if(Browser_UseIESelection()){ Ox22a=Ox1bd[OxO4d84[0x3]][OxO4d84[0x2]] ;if(Ox22a[OxO4d84[0x4]]==OxO4d84[0x5]||Ox22a[OxO4d84[0x4]]==OxO4d84[0x6]){return Ox22a.createRange().parentElement();} ;return Ox22a.createRange().item(0x0);} ;var Ox22a=Ox1bd.getSelection();if(Window_GetSelectionType(Ox1bd)==OxO4d84[0xa]){return Ox22a[OxO4d84[0xd]][OxO4d84[0xc]][Ox22a[OxO4d84[0xb]]];} ;if(Ox22a[OxO4d84[0xe]]){return Ox22a[OxO4d84[0xd]];} ;if(Ox22a[OxO4d84[0xd]]==Ox22a[OxO4d84[0xf]]){return Ox22a[OxO4d84[0xd]];} ;var p=Ox22a[OxO4d84[0xd]];var Ox235=p[OxO4d84[0xc]];for(var i=0x0;i<Ox235[OxO4d84[0x10]];i++){var Ox1c6=Ox235.item(i);if(Ox22a.containsNode(Ox1c6,true)){if(i!=0x0&&Ox22a.containsNode(Ox235.item(i-0x1),false)){continue ;} ;if(i<Ox235[OxO4d84[0x10]]-0x1&&Ox22a.containsNode(Ox235.item(i+0x1),false)){continue ;} ;return Ox1c6;} ;} ;if(Ox22a[OxO4d84[0x8]]==0x1){return Range_GetParentNode(Window_CreateSelectionRange(Ox1bd));} ;if(!Element_Contains(Ox1bd[OxO4d84[0x3]][OxO4d84[0x7]],Ox22a.anchorNode)){return null;} ;return Element_GetSameParent(Ox22a[OxO4d84[0xd]],Ox22a.focusNode);}  ; function Window_GetSelectionElement(Ox1bd){var Ox231=Window_GetSelectionNode(Ox1bd);if(Ox231==null){return null;} ;if(Ox231[OxO4d84[0x11]]==0x1){return Ox231;} ;return Ox231[OxO4d84[0x1]];}  ; function Window_GetSelectionType(Ox1bd){if(Browser_UseIESelection()){return Ox1bd[OxO4d84[0x3]][OxO4d84[0x2]][OxO4d84[0x4]];} ;var Ox22a=Ox1bd.getSelection();if(Ox22a[OxO4d84[0xe]]){return OxO4d84[0x6];} ;if(Ox22a[OxO4d84[0xd]]!=Ox22a[OxO4d84[0xf]]){return OxO4d84[0x6];} ;var p=Ox22a[OxO4d84[0xd]];var Ox235=p[OxO4d84[0xc]];for(var i=0x0;i<Ox235[OxO4d84[0x10]];i++){var Ox1c6=Ox235.item(i);if(Ox1c6[OxO4d84[0x11]]!=0x1){continue ;} ;if(Ox22a.containsNode(Ox1c6,true)){if(i!=0x0&&Ox22a.containsNode(Ox235.item(i-0x1),false)){continue ;} ;if(i<Ox235[OxO4d84[0x10]]-0x1&&Ox22a.containsNode(Ox235.item(i+0x1),false)){continue ;} ;if(Element_IsBlockControl(Ox1c6)){return OxO4d84[0xa];} ;return OxO4d84[0x6];} ;} ;return OxO4d84[0x6];}  ; function Element_IsBlockControl(element){var name=element[OxO4d84[0x12]];if(name==OxO4d84[0x13]){return true;} ;if(name==OxO4d84[0x14]){return true;} ;if(name==OxO4d84[0x15]){return true;} ;if(name==OxO4d84[0x16]){return true;} ;if(name==OxO4d84[0x17]){return true;} ;if(name==OxO4d84[0x18]){return true;} ;var Ox182=element[OxO4d84[0x1a]][OxO4d84[0x19]];if(Ox182==OxO4d84[0x1b]||Ox182==OxO4d84[0x1c]){return true;} ;return false;}  ; function Window_GetDialogTop(Ox1bd){return Ox1bd[OxO4d84[0x1d]];}  ; function Frame_GetContentWindow(Ox23b){if(Ox23b[OxO4d84[0x1e]]){return Ox23b[OxO4d84[0x1e]];} ;if(Ox23b[OxO4d84[0x1f]]){if(Ox23b[OxO4d84[0x1f]][OxO4d84[0x20]]){return Ox23b[OxO4d84[0x1f]][OxO4d84[0x20]];} ;} ;var Ox1bd;if(Ox23b[OxO4d84[0x21]]){ Ox1bd=window[OxO4d84[0x22]][Ox23b[OxO4d84[0x21]]] ;if(Ox1bd){return Ox1bd;} ;} ;var len=window[OxO4d84[0x22]][OxO4d84[0x10]];for(var i=0x0;i<len;i++){ Ox1bd=window[OxO4d84[0x22]][i] ; alert(Ox1bd.name) ;if(Ox1bd[OxO4d84[0x23]]==Ox23b){return Ox1bd;} ;if(Ox1bd[OxO4d84[0x3]]==Ox23b[OxO4d84[0x1f]]){return Ox1bd;} ;} ; Debug_Todo(OxO4d84[0x24]) ;}  ;var iframe=Window_GetElement(window,OxO4d84[0x25],true);var iframe_win=Frame_GetContentWindow(iframe);var obj=Window_GetDialogArguments(window);var editor=obj[OxO4d84[0x26]];var editwin=obj[OxO4d84[0x9]];var editdoc=obj[OxO4d84[0x3]];var oImg=obj[OxO4d84[0x27]];var oMap=null;var aMapName= new Array();var aLeft= new Array();var aTop= new Array();var aWidth= new Array();var aHeight= new Array();var aHref= new Array();var aTarget= new Array();var aTitle= new Array();var aCoords= new Array(); window[OxO4d84[0x28]]=function window_onload(){var src; src=oImg.getAttribute(OxO4d84[0x29])+OxO4d84[0x2a] ;if(oImg.getAttribute(OxO4d84[0x2b])){ src=oImg.getAttribute(OxO4d84[0x2b])+OxO4d84[0x2a] ;} ; oImg[OxO4d84[0x29]]=src ;if(Browser_IsWinIE()){ iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x2c]]=true ;} else { iframe_win[OxO4d84[0x3]][OxO4d84[0x2d]]=OxO4d84[0x2e] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x2c]]=true ;} ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x2f]] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x30]]=OxO4d84[0x31] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x32]]=OxO4d84[0x31] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x33]]=OxO4d84[0x34] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x35]]=OxO4d84[0x36] ; oImg[OxO4d84[0x37]]=OxO4d84[0x2e] ;if(Browser_IsWinIE()){ iframe_win[OxO4d84[0x3]].execCommand(OxO4d84[0x38],true,true) ; iframe_win[OxO4d84[0x3]].execCommand(OxO4d84[0x39],true,true) ;} ; iframe_win.focus() ;if(Browser_IsWinIE()){ iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x3b]]=oImg[OxO4d84[0x3a]] ;} else { iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x3b]]=outerHTML(oImg) ;} ;var Ox249=oImg[OxO4d84[0x3c]];if(Ox249!=OxO4d84[0x2a]){ Ox249=Ox249.toUpperCase() ;var Ox24a=editdoc[OxO4d84[0x7]].getElementsByTagName(OxO4d84[0x3d]);for(var i=0x0;i<Ox24a[OxO4d84[0x10]];i++){ aMapName[i]=Ox24a[i][OxO4d84[0x3e]].toUpperCase() ;if((OxO4d84[0x3f]+aMapName[i])==Ox249){ oMap=Ox24a[i] ;} ;} ;} ;if(oMap){for(var i=0x0;i<oMap[OxO4d84[0x40]][OxO4d84[0x10]];i++){ aHref[i]=oMap[OxO4d84[0x40]][i][OxO4d84[0x41]] ; aTarget[i]=oMap[OxO4d84[0x40]][i][OxO4d84[0x42]] ; aTitle[i]=oMap[OxO4d84[0x40]][i][OxO4d84[0x43]] ; aCoords[i]=oMap[OxO4d84[0x40]][i][OxO4d84[0x44]] ;var Ox14d=aCoords[i].split(OxO4d84[0x45]); aLeft[i]=parseInt(Ox14d[0x0]) ; aTop[i]=parseInt(Ox14d[0x1]) ; aWidth[i]=parseInt(Ox14d[0x2])-aLeft[i] ; aHeight[i]=parseInt(Ox14d[0x3])-aTop[i] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x3b]]+=OxO4d84[0x46]+i+OxO4d84[0x47]+aLeft[i]+OxO4d84[0x48]+aTop[i]+OxO4d84[0x49]+aWidth[i]+OxO4d84[0x4a]+aHeight[i]+OxO4d84[0x4b]+(i+0x1)+OxO4d84[0x4c] ;} ;} ;}  ; function SearchSelectionElement(Ox24c){var body=iframe_win[OxO4d84[0x3]][OxO4d84[0x7]];for(var Oxb0=Window_GetSelectionElement(iframe_win);Element_Contains(body,Oxb0);Oxb0=Oxb0[OxO4d84[0x1]]){if(Oxb0[OxO4d84[0x12]]==Ox24c){return Oxb0;} ;} ;return null;}  ; function Addlink(){var img=SearchSelectionElement(OxO4d84[0x16]);if(!img){return ;} ; function Ox20e(arr){if(arr){ aHref[Ox250]=arr[0x0] ; aTarget[Ox250]=arr[0x1] ; aTitle[Ox250]=arr[0x2] ;} ;}  ;var Ox24f=img[OxO4d84[0x21]];var Ox250=parseInt(Ox24f.substr(0x7));var obj={editor:editor,href:aHref[Ox250],target:aTarget[Ox250],title:aTitle[Ox250]}; editor.SetNextDialogWindow(window) ; editor.ShowDialog(Ox20e,OxO4d84[0x4d],obj,OxO4d84[0x4e]) ;}  ;if(!Window_GetDialogTop(window)[OxO4d84[0x4f]]){ Window_GetDialogTop(window)[OxO4d84[0x4f]]=true ;} ; function do_cancel(){ Window_SetDialogReturnValue(window,null) ; Window_CloseDialog(window) ;}  ; function Zoom_In(){if(iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]!=0x0){ iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]*=1.2 ;} else { iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]=1.2 ;} ;}  ; function Zoom_Out(){if(iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]!=0x0){ iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]*=0.8 ;} else { iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]=0.8 ;} ;}  ; function BestFit(){if(!oImg){return ;} ;var Oxd4=0x118;var Oxd5=0x122; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]=0x1/Math.max(oImg[OxO4d84[0x52]]/Oxd5,oImg[OxO4d84[0x51]]/Oxd4) ;}  ; function Actualsize(){ iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x1a]][OxO4d84[0x50]]=0x1 ;}  ; function newMap(){var n=aHref[OxO4d84[0x10]];var Ox33=(oImg[OxO4d84[0x52]]-0x14)*0.5;var Ox29=(oImg[OxO4d84[0x51]]-0x14)*0.5; aHref[n]=OxO4d84[0x2a] ; aTarget[n]=OxO4d84[0x2a] ; aTitle[n]=OxO4d84[0x2a] ; iframe_win[OxO4d84[0x3]][OxO4d84[0x7]][OxO4d84[0x3b]]+=OxO4d84[0x46]+n+OxO4d84[0x53]+(n+0x1)+OxO4d84[0x54]+Ox33+OxO4d84[0x55]+Ox29+OxO4d84[0x4c] ; iframe_win.scrollBy(0x0,0x0) ; iframe_win.focus() ;}  ; function do_update(){var Ox17=false;for(var i=0x0;i<aHref[OxO4d84[0x10]];i++){var obj=Window_GetElement(iframe_win,OxO4d84[0x56]+i,false);if(obj){ Ox17=true ;} ;} ;if(Ox17){var Ox98=OxO4d84[0x2a];for(var i=0x0;i<aHref[OxO4d84[0x10]];i++){var obj=Window_GetElement(iframe_win,OxO4d84[0x56]+i,false);if(obj){var Ox257=parseInt(obj[OxO4d84[0x1a]].left);var Ox258=parseInt(obj[OxO4d84[0x1a]].top);var Ox259=parseInt(obj[OxO4d84[0x1a]].width);var Ox25a=parseInt(obj[OxO4d84[0x1a]].height);var Ox25b=Ox257+Ox259;var Ox25c=Ox258+Ox25a; Ox98+=OxO4d84[0x57]+Ox257+OxO4d84[0x45]+Ox258+OxO4d84[0x45]+Ox25b+OxO4d84[0x45]+Ox25c+OxO4d84[0x58] ;if(aHref[i]!=OxO4d84[0x2a]){ Ox98+=OxO4d84[0x59]+aHref[i]+OxO4d84[0x5a] ;} ;if((aTarget[i]!=OxO4d84[0x2a])&&aTarget[i]){ Ox98+=OxO4d84[0x5b]+aTarget[i]+OxO4d84[0x5a] ;} ;if(aTitle[i]!=OxO4d84[0x2a]&&aTitle[i]!=null){ Ox98+=OxO4d84[0x5c]+aTitle[i]+OxO4d84[0x5a] ;} ; Ox98+=OxO4d84[0x5d] ;} ;} ;if(oMap){ oMap[OxO4d84[0x3b]]=Ox98 ;} else {var Ox249=getAutoMapName(); oImg[OxO4d84[0x3c]]=OxO4d84[0x3f]+Ox249 ; editor.ExecCommand(OxO4d84[0x5e],false,OxO4d84[0x5f]+Ox249+OxO4d84[0x4c]+Ox98+OxO4d84[0x60]) ;} ;} else {if(oMap){if(Browser_IsWinIE()){ oMap[OxO4d84[0x3a]]=OxO4d84[0x2a] ;} ;} ; oImg[OxO4d84[0x3c]]=OxO4d84[0x2a] ;} ; oImg[OxO4d84[0x37]]=OxO4d84[0x61] ; oImg.removeAttribute(OxO4d84[0x37]) ; editor.InsertElement(oImg) ; window.close() ; Window_CloseDialog(window) ;}  ; function getAutoMapName(){var Ox17=true;var n=0x0;var Ox2a=OxO4d84[0x2a];while(Ox17){ n++ ; Ox2a=OxO4d84[0x62]+n ;if(isValidMapName(Ox2a)){ Ox17=false ;} ;} ;return Ox2a;}  ; function isValidMapName(Ox24){ Ox24=Ox24.toUpperCase() ;for(var i=0x0;i<aMapName[OxO4d84[0x10]];i++){if(aMapName[i]==Ox24){return false;} ;} ;return true;}  ; function do_cancel(){ oImg.removeAttribute(OxO4d84[0x37]) ; Window_CloseDialog(window) ;}  ;if(!Browser_IsWinIE()){ Window_GetElement(window,OxO4d84[0x64],true)[OxO4d84[0x1a]][OxO4d84[0x63]]=OxO4d84[0x65] ; Window_GetElement(window,OxO4d84[0x66],true)[OxO4d84[0x1a]][OxO4d84[0x63]]=OxO4d84[0x65] ; Window_GetElement(window,OxO4d84[0x67],true)[OxO4d84[0x1a]][OxO4d84[0x63]]=OxO4d84[0x65] ; Window_GetElement(window,OxO4d84[0x68],true)[OxO4d84[0x1a]][OxO4d84[0x63]]=OxO4d84[0x65] ;} ;