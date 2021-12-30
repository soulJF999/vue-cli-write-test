var id = 'GLOBAL';
var obj = new Object({
    id: 'OBJ',
    a: function(){
        console.log(this.id);
    },
    b: () => {
        console.log(this)
        console.log(this.id);
    }
});

obj.a();    // 'OBJ'
obj.b();    // 'GLOBAL'
