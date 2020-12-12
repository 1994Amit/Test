import React, { Component } from "react";


import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBIcon } from 'mdbreact';
export default class Display extends Component {
    
render() {
     
        return(
            
               <div> 

    <div className="row">
        <h4 >Human Resource</h4>
        <MDBIcon icon="users" />
    </div>
    

  
<div class="row row-cols-12 row-cols-md-12">
  <div class="col mb-4">
        {/* <a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i
        class="fas fa-chevron-right pl-1"></i></a>
        <a class="activator waves-effect waves-light mr-4"><i class="fas fa-share-alt"></i></a> */}
        
        <div class="card">
            <div class="card-body">
                <div className="row">
                <div className="col-md-4">
                    
                    <div className="row">
                    <div className="col-md-12 justify-content-center">
                            <MDBIcon icon="user-injured" />
                        </div>
                        
                        
                    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                                <h4 class="card-title">Descrimination Incidents</h4>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <p >Number of discrimination incident that were filed during the
                    reporting period</p>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <button type="button" class="btn  active border border-dark">Go to Report    <MDBIcon icon="location-arrow" /></button>
                            </div>
                    </div>
                

                    </div>
                    <div className="col-md-8">
                    <div className="row row-margin-top-50">
                    <div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="red" /></svg> 
                    2017
                            <br/>
                            0 incidents
                        </div>    
                    </div>
                    </div>
                    
                    <div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
                        <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="blue" /></svg> 
                    2018
                            <br/>
                            0 incidents
                        </div>    
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
                        <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="black" /></svg> 
                    2019
                            <br/>
                            0 incidents
                        </div>    
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
    
      </div>
      <hr/>
      <div class="card-body">
                <div className="row">
                <div className="col-md-4">
                    <div className="row">
                    <div className="col-md-12">
                        <MDBIcon icon="map-marker-alt" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                            <h4 class="card-title align-left">Employee Countries</h4>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                                            
                    <p >Number of different nationalities that are representative in the 
        work-force</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                            <button type="button" class="btn active border border-dark">Go to Report    <MDBIcon icon="location-arrow" /></button>
                        </div>
                    </div>
    
                </div>
                <div className="col-md-8">
                    <div className="row row-margin-top-50">
                    <div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="yellow" /></svg> 
                    2017
                            <br/>
                            8 countries
                        </div>    
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="red" /></svg> 
                            2018
                            <br/>
                            8 countries
                        </div>    
                    </div>
                    </div><div className="col-md-4">
                    <div class="card bg-light">
                    <div class="card-body">
                    <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="pink" /></svg> 
                   
                    2019
                            <br/>
                            11 countries
                        </div>    
                    </div>
                    </div>
                </div>
                </div>
                </div>
            <div>
        </div>
      </div>

    </div>
   
  </div>
   </div>

 </div>
        
          
          
        
        )
}
}
