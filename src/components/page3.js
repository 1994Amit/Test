import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBIcon } from 'mdbreact';
import {Pie} from 'react-chartjs-2'
import  PieChart  from "./PieChart";
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

const dataSource = {
  chart: {
    caption: "By Age Group",
    numbersuffix: " ",
    yaxisname: "Number Of Person",
    theme: "fusion",
 
  },
  categories: [
    {
      category: [
        {
          label: "2017"
        },
        {
          label: "2018"
        },
        {
          label: "2019"
        }
       
      ]
    }
  ],
  dataset: [
    {
      seriesname: "18-24yr",
      data: [
        {
          value: "8",
          errorvalue: "2"
        },
        {
          value: "3",
          errorvalue: "0.5"
        },
        {
          value: "2",
          errorvalue: "1"
        },
        {
          value: "6",
          errorvalue: "1.8"
        },
        {
          value: "8",
          errorvalue: "1.2"
        }
      ]
    },
    {
      seriesname: "25-35yr",
      data: [
        {
          value: "7",
          errorvalue: "1"
        },
        {
          value: "4",
          errorvalue: "0.5"
        },
        {
          value: "2",
          errorvalue: "1"
        },
        {
          value: "4",
          errorvalue: "0.8"
        },
        {
          value: "7",
          errorvalue: "1"
        }
      ]
    },
    {
      seriesname: "45-54yr",
      data: [
        {
          value: "9",
          errorvalue: "2"
        },
        {
          value: "3",
          errorvalue: "0.7"
        },
        {
          value: "3",
          errorvalue: "1"
        },
        {
          value: "6",
          errorvalue: "1.8"
        },
        {
          value: "7",
          errorvalue: "1.2"
        }
      ]
    }
  ]
};

export default class dreamsdetails extends React.Component {




  render() {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        data: [50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };

    
let data1 = [
  ["Task", "Porcentaje"],
  ["2017", 1],
  ["1/16", 16],
 
  ["total 17", 17]
];

let data2 = [
  ["Task", "Porcentaje"],
  ["2018", 1],
  ["1/14", 14],
 
  ["total 15", 15]
];

let data3 = [
  ["Task", "Porcentaje"],
  ["2019", 2],
  ["2/11", 11],
 
  ["total 13", 13]
];
   
 return (
   
   <div>
    <div className="row">
      <div className="col-md-4 align-self-center">
        <div className="row">
          <div className="col-md-12">
            <MDBIcon icon="user-tie" />
          </div>
          <div className="col-md-12">
            <h4>Full Time Employees</h4>
          </div>
          <div className="col-md-12">
            <p>Employees with full-time working hours as defined by the country's legislation</p>
          </div>
          <div className="col-md-12">
          <button type="button" class="btn active border border-dark">Go to Report    <MDBIcon icon="location-arrow" /></button>
          </div>   
        </div>
      </div>
      <div className="col-md-8">
        <ReactFC
          type="errorbar2d"
          width="100%"
          height="200%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
   </div> 
   <div className="row">
     <div className="col-md-12">
       <h4>Local and Expat</h4>
     </div>
    </div>
    <div className="row top-margin-30">
              <div className="col-md-4">
              <PieChart language="es" data={data1}  options={{
                
                maintainAspectRatio: true}}/>
               
              </div>
            

              <div className="col-md-4">
              <PieChart language="es" data={data2}  options={{
                
                maintainAspectRatio: true}}/>
               
              </div>

              <div className="col-md-4">
              <PieChart language="es" data={data3} />
              </div>
            </div>

   </div>
 )
}
}