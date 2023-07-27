class SideBar extends BaseTable {
  getRenderData() {
    let categories = [];
    let key  = 'category';
    tableData.forEach( (x) => {
        if(categories.some( (val) => { return val[key] == x[key]})) {
            categories.forEach( (k) => {
                if( k[key] === x[key]) {
                    k['count'] ++;
                    k['price'] += +x['price'];
                }
            })
        } else {
            let a = {};
            a[key] = x[key];
            a['count'] = 1;
            a['price'] = x['price']
            categories.push(a);
        } 
    })
    return categories;
  }
  getCellData(data) {
    return [
      { text: data.category, elementName: "td", handleClick: "" },
      { text: data.count, elementName: "td", handleClick: "" },
      { text: data.price, elementName: "td", handleClick: "" },
    ];
  }
}
