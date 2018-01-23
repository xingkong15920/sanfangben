var aNum = 1;
var cursel_0=1;
function setTab(name,cursel,attr){
    if(name == 'one'){
        aNum = cursel+1;
        for(var i = 0 ; i < $('.content').length; i++ ){
            $('.content').eq(i).hide();
            $('.content').eq(cursel).show()
        }
    }
    cursel_0=cursel;
    if(name == 'none'){
      setTab(name_0,cursel_0);  
    }
    
    // if(cursel == '7' && name == 'column'){
    //     console.log('11')
    //    document.getElementById('con_column_7').style.display="block";
    // }else{
    //     document.getElementById('con_column_7').style.display="none";
    // }
    for(var i=1; i<=links_len; i++){
        var menu = document.getElementById(name+i);
        var medo = document.getElementById(name+i);
        var medo1 = document.getElementById(name+i);
        var medo2 = document.getElementById(name+i);
        var medo3 = document.getElementById(name+i);
        var medo4 = document.getElementById(name+i);
        var medo5 = document.getElementById(name+i);
        var medo6 = document.getElementById(name+i);
        var medo7 = document.getElementById(name+i);
        var medo8 = document.getElementById(name+i);
        var medo9 = document.getElementById(name+i);

        // var meduo9 = document.getElementById("con_"+name+"_"+i);
        // var meduo8 = document.getElementById("con_"+name+"_"+i);
        // var meduo7 = document.getElementById("con_"+name+"_"+i);
        // var meduo6 = document.getElementById("con_"+name+"_"+i);
        // var meduo5 = document.getElementById("con_"+name+"_"+i);
        // var meduo4 = document.getElementById("con_"+name+"_"+i);
        // var meduo3 = document.getElementById("con_"+name+"_"+i);
        // var meduo2 = document.getElementById("con_"+name+"_"+i);
        // var meduo1 = document.getElementById("con_"+name+"_"+i);
        // var menudiv = document.getElementById("con_"+name+"_"+i);
        // var meduo = document.getElementById("con_"+name+"_"+i);

}
        if(i==cursel){

            menu.className="off";
            medo.className="off";
            medo1.className="off";
            medo2.className="off";
            medo3.className="off";
            medo4.className="off";
            medo5.className="off";
            medo6.className="off";
            medo7.className="off";
            medo8.className="off";
            medo9.className="off";
            // meduo9.style.display="block";
            // meduo8.style.display="block";
            // meduo7.style.display="block";
            // meduo6.style.display="block";
            // meduo5.style.display="block";
            // meduo4.style.display="block";
            // meduo3.style.display="block";
            // meduo2.style.display="block";
            // meduo1.style.display="block";
            // meduo.style.display="block";
            // menudiv.style.display="block";

        }

        else{
            if(menu == null){
                return
            }
            menu.className="";
            medo.className="";
            medo2.className="";
            medo3.className="";
            medo4.className="";
            medo5.className="";
            medo6.className="";
            medo7.className="";
            medo8.className="";
            medo9.className="";
            medo1.className="";

            // meduo1.style.display="none";
            // meduo9.style.display="none";
            // meduo8.style.display="none";
            // meduo7.style.display="none";
            // meduo6.style.display="none";
            // meduo5.style.display="none";
            // meduo4.style.display="none";
            // meduo3.style.display="none";
            // meduo2.style.display="none"
            // meduo.style.display="none";
            // menudiv.style.display="none";

        }
        $('#conBox'+ aNum ).attr('src',attr)
 
}

// function Next(){

//     cursel_0++;

//     if (cursel_0>links_len)cursel_0=1

//     setTab(name_0,cursel_0);

// }

// var name_0='one';
// var name_0='column';
// var name_0='colum';
// var name_0='colunm';
var name_0='colnm';



//alert(name_0)
var links_len,iIntervalId;

onload=function(){

    var links = document.getElementById("tab1").getElementsByTagName('li')
    /*var links = document.getElementById("tab2").getElementsByTagName('dd')
    var links = document.getElementById("tab3").getElementsByTagName('dd')
    var links = document.getElementById("tab4").getElementsByTagName('dd')
    var links = document.getElementById("tab5").getElementsByTagName('dd')
    var links = document.getElementById("tab6").getElementsByTagName('dd')
    var links = document.getElementById("tab7").getElementsByTagName('dd')
    var links = document.getElementById("tab8").getElementsByTagName('dd')
    var links = document.getElementById("tab9").getElementsByTagName('dd')
    var links = document.getElementById("tab10").getElementsByTagName('dd')*/

    links_len=links.length;
    //alert(links.length);
    for(var i=0; i<links_len; i++){

        links[i].onmouseover=function(){

        clearInterval(iIntervalId);

        }

    }

    // document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){

    // clearInterval(iIntervalId);

    // }

    setTab(name_0,cursel_0,'11/01.html');

}





