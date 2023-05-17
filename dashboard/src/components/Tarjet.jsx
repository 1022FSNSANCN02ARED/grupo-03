import React  from "react";


function Tarjet() {
    return (
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Cantidad De Usuario
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  
       
        <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                   
                    Cantidad De Cabañas
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        
        <div className="col-md-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Cantidad De Actividades
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Tarjet;