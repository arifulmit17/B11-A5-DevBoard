const element=document.getElementsByClassName('card-btn');
let currentDate=new Date();
currentDate=currentDate.toString();
currentDate=currentDate.split(' ');
let dateObj=document.getElementById('date-time');
dateObj.innerText=currentDate[0]+' , '+'\n'+ currentDate[1] + ' ' + currentDate[2] +' '+currentDate[3];

for(const btn of element){
    btn.addEventListener('click',function(event){
        // alert('Board updated successfully')
        // const btnId= event.target.id;
        
        let taskCounter=parseInt(document.getElementById('task-count').innerText) ;
        let navTaskCounter=parseInt(document.getElementById('task-counter').innerText) ;
        const clickedTarget=event.target.id;
        let date=new Date();
        let date1=date.toLocaleString();
        let date2=date.toString();
        date1=date1.split(' ');
        date2=date2.split(' ');
        const time1=date2[4];
        const time2=date1[2];
        // console.log(clickedTarget);
        taskCounter-=1;
        navTaskCounter+=1;
        document.getElementById('task-count').innerText=taskCounter;
        document.getElementById('task-counter').innerText=navTaskCounter;
        document.getElementById(btn.id).classList.add('btn-disabled')
        const taskName=document.querySelectorAll('.task');
        // console.log(taskName.id);
        const activity=document.getElementById('history-container');
        const p=document.createElement("p");
        p.classList.add('bg-[#F4F7FF]' , 'rounded-lg','my-6')
        p.innerText='You have completed the task '+ taskName+ ' at '+time1 +' '+ time2;
        
        activity.appendChild(p);
        if(taskCounter===0){
            alert('All task completed succesfully');
        }
    })
}

document.getElementById('activity-clear').addEventListener('click',function(){
   const historyId= document.getElementById('history-container');
   historyId.innerHTML='';
});

document.getElementById('discover-text').addEventListener('click',function(){
    window.location.href='./blog.html';
});

document.getElementById('theme-change').addEventListener('click',function(){
    const theme= document.getElementById('body-theme');
    const red=Math.round(Math.random()*255);
    const green=parseInt(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    theme.style.backgroundColor="rgb("+red+","+green+","+blue+")";
})


// element.addEventListener('click', function(event){
//     console.log(event);
//     if(event.target.classList.contains('card-btn-1')){
//         alert('Board updated successfully')
//         const btnId= event.target.id;
//         console.log(taskCounter);
//         let taskCounter=parseInt(document.getElementById('task-count').innerText) ;
//         let navTaskCounter=parseInt(document.getElementById('task-counter').innerText) ;
//         taskCounter-=1;
//         navTaskCounter+=1
//         document.getElementById('task-count').innerText=taskCounter;
//         document.getElementById('task-counter').innerText=navTaskCounter;
//         document.getElementById(btnId).classList.add('btn-disabled')
//     }
    
    
// })


// document.getElementById('card-btn-1').addEventListener('click',function cardButton(event));



// function cardButton(event){
    
// }