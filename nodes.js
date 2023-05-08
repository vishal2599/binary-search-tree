function Node(val, x, y){
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}

Node.prototype.search = function(val){
    if(this.value == val){
        return this;
    } else if( this.left != null && val < this.value ){
        return this.left.search();
    } else if( this.right != null && val > this.value ){
        return this.right.search();
    }
    return null;
}

Node.prototype.visit = function(parent){
    if( this.left != null ){
        this.left.visit(this);
    }
    console.log(this.value);
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    noFill();
    stroke(255);
    line(parent.x, parent.y, this.x, this.y);
    ellipse(this.x, this.y, 20, 20);
    if( this.right != null ){
        this.right.visit(this);
    }
}

Node.prototype.addNode = function(n){
    if(n.value < this.value){
        if(this.left == null){
            this.left = n;
            this.left.x = this.x - 50;
            this.left.y = this.y + 20;
        } else {
            this.left.addNode(n);
        }
    } else if ( n.value > this.value ) {
        if(this.right == null){
            this.right = n;
            this.right.x = this.x + 50;
            this.right.y = this.y + 20;
        } else {
            this.right.addNode(n);
        }
    }
}