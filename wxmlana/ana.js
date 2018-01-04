function ana(raw){
    var str="";
    for(var i in raw){
        if(i=="tag"){
            str+="<"+raw[i];
            if(raw["attr"]!=""){
                for(var j in raw["attr"]){
                    str+=" "+j+"=\""+raw["attr"][j]+"\"";
                }
                str+=">";
            }
            if(raw["children"]!=""){
                
                for(var k in raw["children"]){
                    //console.log(typeof(raw["children"][k]));
                    if(typeof(raw["children"][k])=="object"){
                        str+=ana(raw["children"][k]);
                    }else{
                        str+=raw["children"][k];
                    }
                }
            }
            str+="</"+raw[i]+">";
        }
    }
    return str;
}
