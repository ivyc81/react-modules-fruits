function choice(items){
    const index =  Math.floor(Math.random()*items.length);

    return items[index];
}

function remove (items, item) {
    const index = items.indexOf(item);
    items.splice(index, 1);

    return items;
}

export { choice, remove };