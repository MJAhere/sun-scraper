import React, { Component } from "react";
// import { Bar, Line, Pie } from 'react-chartjs-2';
import BHDChart from '../components/BHDChart';
import PV from '../components/PV';
import BHPVwatts from '../components/BHPVwatts';



class Dashboard extends Component {
    
    

    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="container">
                        <br></br>
                        <Line
                            data={this.state.chartData}
                            width={100}
                            height={50}
                            options={{ maintainAspectRatio: false }}
                        />

                        <br></br>

                    </div>
                </div>
            <div>
                <div className="container col-sm-8 mt-5">
                    <br></br>
                        <h1 className="h3 mb-3 font-weight-normal">DashboardSmashboard</h1>
                        <div className="row">
                            
                        </div>
                </div>
                <BHDChart />
                <BHPVwatts/>
                <PV/>
            </div>
        </div>
        )
    }
}

export default Dashboard;