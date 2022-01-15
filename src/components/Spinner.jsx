import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" display="block" preserveAspectRatio="xMidYMid" style={{margin: 'auto', width: 100}} viewBox="0 0 100 100"> <circle cx={50} cy={50} r={10} fill="#666"> <animate attributeName="cx" begin="-0.25s" calcMode="spline" dur="1s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="71.21320343559643;28.78679656440357;71.21320343559643" /> <animate attributeName="cy" begin="-0.25s" calcMode="spline" dur="1s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="71.21320343559643;28.786796564403577;71.21320343559643" /> <animate attributeName="r" begin="-0.25s" dur="1s" keyTimes="0;0.25;0.5;0.75;1" repeatCount="indefinite" values="10;2;10;2;10" /> </circle> <circle cx={50} cy={50} r={10} fill="#999"> <animate attributeName="cx" begin="0s" calcMode="spline" dur="1s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="28.786796564403577;71.21320343559643;28.786796564403577" /> <animate attributeName="cy" begin="0s" calcMode="spline" dur="1s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="71.21320343559643;28.78679656440357;71.21320343559643" /> <animate attributeName="r" begin="0s" dur="1s" keyTimes="0;0.25;0.5;0.75;1" repeatCount="indefinite" values="10;2;10;2;10" /> </circle> </svg>
      </div>
    )
  }
}
