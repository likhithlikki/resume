function clr(){
    document.getElementById('tv').value=" ";
}

function disp(val){
    document.getElementById('tv').value +=val
}

function clr1(){
    let b=document.getElementById('tv').value;
    c=b.slice(0,-1);
    document.getElementById('tv').value=c;
}

function ans() {
    try{
      let x=document.getElementById('tv').value;
      let y= eval(x)
      clr()
      document.getElementById('tv').value=y
    }
    catch{
        document.getElementById('tv').value="Error"
    }
}