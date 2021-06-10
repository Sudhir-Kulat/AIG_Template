import React, { Component } from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

class PlanSearchResult extends Component {
    constructor(props) {
      super(props);

      this.state = {
        columnDefs: [
          { headerName: "Name", field: "name", sortable:true, filter:true },
          { headerName: "Email", field: "email", sortable:true, filter:true  },
          { headerName: "Gender", field: "gender", sortable:true, filter:true  },
        ],
      };
    }
    
    render() {
        console.log("in render of res")
        console.log(this.props.users)
        return (
          <div
            className="ag-theme-balham mt-3 mx-auto"
            style={{ width: 600, height: 350 }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.props.users}
            />
          </div>
        );
    }
}

export default PlanSearchResult
