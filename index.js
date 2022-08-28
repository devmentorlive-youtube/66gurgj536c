// build a data structure that will allow data to be inserted
// but it can only hold a predetermined number of items
// when additional values are passed in, the oldest values need
// to be removed automatically.

function MovingWindow(size = 2) {
  const items = [];

  return {
    items,
    add: (item) => {
      items.push(item);
      if (items.length > size) items.shift();
    },
  };
}

const { items, add } = MovingWindow();

add(1);
add(2);
add(3);
add(4);

console.dir(items);
