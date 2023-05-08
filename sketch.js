var tree;

function setup(){
    createCanvas(600, 400);
    background(61);
    var n = new Node(5);
    tree = new Tree();
    for(var i = 0; i < 10; i++){
        tree.addValue(Math.floor((Math.random() * 100) + 1) + i);
    }

    tree.traverse();

    var result = tree.search(10);
    if( result == null ){
        console.log('Not Found');
    } else {
        console.log(result);
    }
}