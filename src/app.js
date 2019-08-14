const Vue=require('vue');
const app=new Vue({
    template:`<div>hello world ssr</div>`
})

const renderder=require('vue-server-renderer').createRenderer();

renderder.renderToString(app).then(html=>{
    if(err) throw err;
    console.log(html)
}).catch(err=>console.error(err));

