import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        loaded: true
      },
      () => {
        this.setState({
         
        });
      }
    );

    console.log(document.querySelectorAll("text").length);
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div className="col-md-4">
            <Chart
              width={"400px"}
              height={"200px"}
          
              chartType="PieChart"
         
              data={this.props.data}
              options={{
               
                pieHole: 0.4,
                pieStartAngle: 270,
                slices: {
                  2: {
                    color: "transparent"
                  }
                }
              }}
            />
          </div>
        ) : (
          "Cargando datos"
        )}
      </div>
    );
  }
}

