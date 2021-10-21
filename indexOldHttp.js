const http=require('http');

http.createServer((req,res)=>{
//console.log(req);

/*res.writeHead(200,{'Content-Type':'application/json'});
const user={
    id:123,
    nombre:'ADT'
}
res.write(JSON.stringify(user));*/
res.setHeader('Content-Disposition','attachment;filename=usuarios.csv');
res.writeHead(200,{'Content-Type':'application/csv'});
res.write('id\;name\n123;Alejandro\n124;Paola')

res.end();
}).listen(3000);