let currentDate=new Date();
currentDate=currentDate.toString();
currentDate=currentDate.split(' ');
let dateObj=document.getElementById('date-time');
dateObj.innerText=currentDate[0]+' , '+'\n'+ currentDate[1] + ' ' + currentDate[2] +' '+currentDate[3];

const element=document.getElementsByClassName('card-btn');
for(const btn of element){
    btn.addEventListener('click',function(){
        
        let taskCounter=parseInt(document.getElementById('task-count').innerText) ;
        let navTaskCounter=parseInt(document.getElementById('task-counter').innerText) ;
        
        let date=new Date();
        let date1=date.toLocaleString();
        let date2=date.toString();
        date1=date1.split(' ');
        date2=date2.split(' ');
        const time1=date2[4];
        const time2=date1[2];
        
        taskCounter-=1;
        navTaskCounter+=1;
        if(taskCounter>=0){
            document.getElementById('task-count').innerText=taskCounter;
        }
        
        document.getElementById('task-counter').innerText=navTaskCounter;
        document.getElementById(btn.id).classList.add('btn-disabled')

        const cardId=btn.id.split('-');
        const taskName=document.querySelectorAll('.task');
        let taskText='';
        for(let i=1;i<=taskName.length ;i++){
            let textElementId=i;
            if(parseInt(cardId[2])===textElementId){
                taskText=taskName[i-1].innerText;
               
            }
        }
        
        const activity=document.getElementById('history-container');
        const p=document.createElement("p");
        p.classList.add('bg-[#F4F7FF]' , 'rounded-lg','my-6','p-4','text-base','font-normal')
        p.innerText='You have completed the task '+ taskText+ ' at '+time1 +' '+ time2;
        
        activity.appendChild(p);

        alert('Board updated successfully');

        if(taskCounter===0){
            alert('Congrats!!! You have completed all the current task');
        }
    })
}
document.getElementById('discover-text').addEventListener('click',function(){
    window.location.href='./blog.html';
});

document.getElementById('activity-clear').addEventListener('click',function(){
   const historyId= document.getElementById('history-container');
   historyId.innerHTML='';
});

document.getElementById('theme-change').addEventListener('click',function(){
    const theme= document.getElementById('body-theme');
    const red=Math.round(Math.random()*255);
    const green=parseInt(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    theme.style.backgroundColor="rgb("+red+","+green+","+blue+")";
})


