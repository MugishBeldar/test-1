class BaseTable extends BaseClass{
    
    render() {
        super.render(this.componentRenderer.bind(this))
    }
    componentRenderer() {
        const table = document.createElement('table');
        this.getRenderData().forEach((data) => {
            console.log(data);
            let tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }
    
    getRenderData() {
        
    }
    getCellData(data) {
       
    }
    renderCells(element , cellData) {
        // do not edit this function is possible
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick
            element.append(childElement);
        })
    }
    deleteData()
    {
            let i = this.parentNode.rowIndex;
            tableData.splice(i,1);
            document.dispatchEvent(myEvent);
    }
}



