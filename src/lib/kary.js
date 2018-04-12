import { v4 as uuid } from 'uuid';

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

  // pass an options object with the following:
  // targetId: The id of the node you want to update or remove
  // data: the value of the new or updated node
  // action: UPDATE, ADD, or REMOVE
  // 
  // if no options are provided a deep copy is performed
  reduce(options = {}) {
    const {
      data,
      type,
      targetId,
    } = options;

    if ((!this.root && !type === 'ADD') || (type === 'REMOVE' && targetId === this.root.id)) return new Kary();
    else if (!this.root && type === 'ADD') return new Kary(data);

    let nextValue = this.root.value;
    const rootChildren = [...this.root.children];

    if (this.root.id === targetId) {
      if (type === 'UPDATE') nextValue = data;
      else if (type === 'ADD') rootChildren.push(new Node(data));
    }

    const newTree = new Kary(nextValue, this.root.id);

    const _cloneTreeRecursively = (newParent, children) => {
      children.forEach(({ value, id, children: nextChildren }) => {
        let newValue = value;

        if (targetId === id) {
          if (type === 'ADD') nextChildren.push(new Node(data));
          else if (type === 'UPDATE') newValue = data;
        }

        if (!(targetId === id && type === 'REMOVE')) {
          const nextParent = new Node(newValue, id);
          newParent.children.push(nextParent);
          _cloneTreeRecursively(nextParent, nextChildren);
        }
      });
    };

    _cloneTreeRecursively(newTree.root, rootChildren);

    return newTree;
  }
}

export default Kary;
