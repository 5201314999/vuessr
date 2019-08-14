const Vue=require('vue');
const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
// const router=new Router();
const index=new Vue({
    template:`<div>hello world ssr</div>`
})

const renderder=require('vue-server-renderer').createRenderer();
app.use(async (ctx)=>{
    renderder.renderToString(index).then(html=>{
        ctx.body=html;
    })
}); 

app.listen(3000,()=>{
    console.log('build done! server is starting at port 3000')
    console.log('http://localhost:3000');
})