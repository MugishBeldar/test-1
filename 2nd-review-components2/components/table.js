class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName , elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:'Delete', elementName:'button', handleClick: this.deleteData},
        ]
    }
}


