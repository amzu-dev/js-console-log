const express = require('express');
const app = express();
const port = 3000;

app.get('/time',(req,res)=>{
    console.time('Call Database in');
    //Pretend you are calling DB to do CRUD, and it returns back response in 5 seconds
    setTimeout(()=>{console.timeEnd('Call Database in')},5000); 
    //Prenend you are calling an API, and it returns back response in 3 seconds.
    console.time('Call API in');
    setTimeout(()=>{console.timeEnd('Call API in')},3000);
    res.send('Timer called');
});

app.get('/assert',(req,res)=>{
    var asserted = Boolean(Math.round(Math.random()));
    console.log('Actual assertion: ' + asserted);
    console.assert(asserted, 'The result is false, assertion failed with result : + ' + asserted);
    res.send('Assert Called');
});

app.get('/count',(req,res)=>{
    console.count('Count Called');
    res.send('Count Called');
});

app.get('/group',(req,res)=>{
    //This works awesome in the Browser console, with a frontend API.
    console.log('Called outside of Group');
    console.group('Calling API');
    console.log('I am calling API1');
    console.log('I am calling API2');
    console.log('I am calling API3');
    console.groupEnd();
    console.group('Calling DB');
    console.log('I am calling DB1');
    console.log('I am calling DB2');
    console.groupEnd();
    res.send('Group Called');
});

app.get('/table',(req,res)=>{
    const obj = [{
        id: 1,
        name: 'venkat',
        email: 'venkat@something.com'
    },{
        id: 2,
        name: 'padmi',
        email: 'padmi@something.com'
    },{
        id: 3,
        name: 'John',
        email: 'john@something.com'
    },{
        id: 4,
        name: 'veejay',
        email: 'veejay@something.com'
    },{
        id: 5,
        name: 'sri',
        email: 'sriaaa@something.com'
    },];
    console.table(obj);
    res.send(obj);
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
