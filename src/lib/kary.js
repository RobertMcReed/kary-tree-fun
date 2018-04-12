// import { v4 as uuid } from 'uuid';

const uuid = require('uuid/v4');

class Node {
  constructor(value, id) {
    this.id = id || uuid();
    this.value = value;
    this.children = [];
  }

  _addChild(value) {
    this.children.push(new Node(value));
  }
}

class Kary {
  constructor(value, id) {
    this.root = value === undefined ? null : new Node(value, id);
  }

  // addNode(value, parentId) {


  // }

  // pass an options object with the following:
  // targetId: The id of the node you want to update or remove
  // data: the value of the new or updated node
  // action: UPDATE, ADD, or REMOVE
  // 
  // if no options are provided a deep copy is performed
  reduce(options) {
    if (!this.root) return new Kary();
    
    const newTree = new Kary(this.root.value, this.root.id);

    const _cloneTreeRecursively = (parent, children) => {
      children.forEach(({ value, id, children: nextChildren }) => {
        const nextParent = new Node(value, id);
        parent.children.push(nextParent);
        _cloneTreeRecursively(nextParent, nextChildren);
      });
    };

    _cloneTreeRecursively(newTree.root, this.root.children);

    return newTree;
  }
}

const tree = new Kary('butt');
tree.root._addChild('face');
tree.root._addChild('leg');
tree.root._addChild('arm');
tree.root._addChild('torso');
tree.root.children[0]._addChild('bneck');
console.log(JSON.stringify(tree, null, 4));
const clone = tree.reduce();
console.log(JSON.stringify(clone, null, 4));

// export default Kary;
