const tabs = document.querySelectorAll('.tabs div');

const tabsContent = document.querySelector('.content-area');

const tab1 = document.querySelector('#history');
const tab2 = document.querySelector('#vision');
const tab3 = document.querySelector('#goals');

console.log(tabs);

const goals = `<div class="title">Goals</div>
<p class="content paragraph">
    I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.
</p>`;
const vision = `<div class="title">Vision</div>
<p class="content paragraph">
    I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.
</p>`;
const history = `<div class="title">History</div>
<p class="content paragraph">
    I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.
</p>`;

// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', (e)=>{
//         // console.log(tabs[index])
//         tabs.forEach(element => {
//             if (element.innerText.trim().toLowerCase() == tab.innerText.trim().toLowerCase()) {
//                 element.style.backgroundColor="white";
//             }else{
//                 element.style.backgroundColor="hsl(212, 33%, 89%)";
//             }
//         });

//         const tabClicked = e.target.innerText;
//         if (tabClicked.trim().toLowerCase()=="history") {
//             tabsContent.innerHTML = history;
//         }else if(tabClicked.trim().toLowerCase()=="goals"){
//             tabsContent.innerHTML = goals; 
//         }else if(tabClicked.trim().toLowerCase()=="vision"){
//             tabsContent.innerHTML = vision; 
//         }
//     })
// });



//second method

// const name = azad;

tab1.addEventListener('click', (e)=>{
    tabsContent.innerHTML = history;
    // console.log(e.target);
    tab1.style.backgroundColor = 'white';
    tab2.style.backgroundColor = 'hsl(212, 33%, 89%)';
    tab3.style.backgroundColor = 'hsl(212, 33%, 89%)';
})
tab2.addEventListener('click', (e)=>{
    tabsContent.innerHTML = vision;
    tab2.style.backgroundColor = 'white';
    tab1.style.backgroundColor = 'hsl(212, 33%, 89%)';
    tab3.style.backgroundColor = 'hsl(212, 33%, 89%)';
    // console.log(e.target);
})
tab3.addEventListener('click', (e)=>{
    tabsContent.innerHTML = goals;
    tab3.style.backgroundColor = 'white';
    tab1.style.backgroundColor = 'hsl(212, 33%, 89%)';
    tab2.style.backgroundColor = 'hsl(212, 33%, 89%)';
    // console.log(e.target);
})