export default function cleanSet(set, startString) {
    const listItem = [];
  
    if (
      typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
    ) {
      return '';
    }
  
    for (const items of set) {
      if (items && items.startsWith(startString)) {
        listItem.push(items.slice(startString.length));
      }
    }
  
    return listItem.join('-');
  }
