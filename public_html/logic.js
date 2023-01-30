function Calculate() {
    let Number = document.getElementById("input-Number").value;
    let FromBase = document.getElementById("From-base").value;
    let ToBase = document.getElementById("To-base").value;
    let fbase = 0;
    let tbase=0;
    tbase = parseInt(ToBase);
    fbase = parseInt(FromBase);
    for (let i = 0; i < Number.length; i++) {
        let temp = 0;
        if (Number[i] == 'A') temp = 10;
        else if (Number[i] == 'B') temp = 11;
        else if (Number[i] == 'C') temp = 12;
        else if (Number[i] == 'D') temp = 13;
        else if (Number[i] == 'E') temp = 14;
        else if (Number[i] == 'F') temp = 15;
        else
            temp = parseInt(Number[i]);
        if (temp >= fbase) {
            document.getElementById("Result").value = "Invalid Number";
            return 0;
        }
    }
        let flag = 0;
        let num = 0.0;
        let j = -1;
        let k = 0;
        for (; k < Number.length; k++) {
            if (Number[k] == '.')
                break;
        }
        k--;
        for (let i = 0; i < Number.length; i++) {
		let temp=0;
            if (Number[i] == 'A') temp = 10;
            else if (Number[i] == 'B') temp = 11;
            else if (Number[i] == 'C') temp = 12;
            else if (Number[i] == 'D') temp = 13;
            else if (Number[i] == 'E') temp = 14;
            else if (Number[i] == 'F') temp = 15;
            else
            temp = parseInt(Number[i]);
            if (Number[i] == '.')
                flag = 1;
            else if (flag == 0) {
                num += temp * (fbase**k);
                k--;
            }
            else if (flag == 1) {
                num +=temp *(fbase**j);
                j--;
            }
        }  
    if(tbase==10){
        document.getElementById("Result").value=num;
        return 0;
        }
          let ip=0,fp=0.0,p=0;
          ip=parseInt(num);
          fp=num-ip;
          
          let pre=6;
          let ans="";
          while(ip>tbase){
            let n=0;
            n=ip%tbase;
            n=parseInt(n);
                ans+=n.toString();
                ip=ip/tbase;
          }
          ip=parseInt(ip);
          if(tbase==16){
          if((ip)==10)ans+='A';
              else if((ip)==11)ans+='B';
              else if((ip)==12)ans+='C';
              else if((ip)==13)ans+='D';
              else if((ip)==14)ans+='E';
              else if((ip)==15)ans+='F';
              else ans+=ip.toString();
          }
          else
          ans+= ip.toString();
        //   document.getElementById("demo").innerHTML+=" "+ans;
          function reverse(s){
            return s.split("").reverse().join("");
        }
          ans=reverse(ans);
        //   document.getElementById("Result").value+=" "+ans;
             ans+='.';
          for(let i=0;i<pre;i++){
            if(fp==0)
                break;
              fp*=tbase;
              p=parseInt(fp);
              fp-=p;
              if((p)==10)ans+='A'; 
              else if((p)==11)ans+='B';
              else if((p)==12)ans+='C';
              else if((p)==13)ans+='D';
              else if((p)==14)ans+='E';
              else if(p==15)ans+='F';
              else{
              ans+=p.toString();
              }
          }
           document.getElementById("Result").value=ans+"0";  
           return 0;

}
function Reset(){
   document.getElementById("input-Number").value="";
    document.getElementById("From-base").value="";
    document.getElementById("To-base").value="";
    document.getElementById("Result").value="";
}
