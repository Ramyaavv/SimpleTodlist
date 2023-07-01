
  
    let inpu = document.getElementById("inp");
    let bu=document.getElementById('butt');
    let con=document.getElementById('container');
    let arr=[];
    window.onload=()=>{
       arr= JSON.parse(localStorage.getItem('arr')) || [];
       arr.forEach(todo=>addtodo(todo))
        
    }

    
    
    function myfunc(){
        
        

        arr.push(inpu.value);
        localStorage.setItem('arr',JSON.stringify(arr))
        addtodo(inpu.value);
        inpu.value='';
    }
    function addtodo(todo){
        let pa=document.createElement('p');
        pa.innerText=todo;
        con.appendChild(pa); 
        pa.style.paddingLeft='20px';
        pa.addEventListener('click',()=>{
            pa.style.textDecoration='line-through';
            remove(todo)
        })
        pa.addEventListener('dblclick',()=>{
            con.removeChild(pa)
            remove(todo)
        })

    }
    function remove(todo)
    {
        let index=arr.indexOf(todo);
        if(index>-1)
        {
            arr.splice(index,1)

        }
        localStorage.setItem('arr',JSON.stringify(arr))

    }
    

    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   



