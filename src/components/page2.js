import React, { Component } from "react";
import {Pie} from 'react-chartjs-2'

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBIcon } from 'mdbreact';
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);


   
export default class Display extends Component {
 
 
    render() {
      const data = {
        labels: [
          'Male',
          'Female',
          
        ],
        datasets: [{
          data: [50, 100],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          
          ]
        }]
      };
          return(
            <div>

              <div className="row justify-content-center">
              <MDBIcon icon="chalkboard-teacher" />
              </div>
              <div className="row justify-content-center">
              <h4>Employee Training</h4>
              </div>
              <div className="row justify-content-center">
              <p>Training Peograms aimed at upgrading amployees skills in the orginazation</p>
              </div>
              <div className="row justify-content-center">
              <button type="button" class="btn active border border-dark">Go to Report    <MDBIcon icon="location-arrow" /></button>
              </div>

            
            {/* <div className="row"> */}
              <div className="card row-margin-top-50 no-border">
              <div className="row">
              
              <div className="col-md-12">
              <h5>Overview</h5>
              </div>
            </div>
            <div className="row top-margin-30">
              <div className="col-md-4">
                <Pie
                  data={data}
                  options={{
                    legend: {
                      display: false
                    },
                    maintainAspectRatio: true,
                  }}
             
                    
                />
              </div>
            

              <div className="col-md-4">
                <Pie
                  data={data}
                  options={{
                    legend: {
                      display: false
                    },
                    maintainAspectRatio: true,
                  }}
                />
              </div>

              <div className="col-md-4">
                <Pie
                  data={data}
                  options={{ legend: {
                    display: false
                  },
                
                    maintainAspectRatio: true,
                  }}
                />
              </div>
            </div>   
         
          

       <center>     <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="#FF6384  "   labels="male"/></svg>Male 
  <svg height="15" width="15">
  <circle cx="6" cy="6" r="6" stroke="black" stroke-width="0" fill="#36A2EB " /></svg> Female
  </center>
              </div>


            {/* </div> */}
            
            
          </div> 
          )
          }
}