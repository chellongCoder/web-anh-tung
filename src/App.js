import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import thuoc from "./assets/thuoc.jpg";
import price from "./assets/price.png";
import thailan from "./assets/thailan.png";
import scan from "./assets/scan.png";
import sucess from "./assets/sucess.png";
import qr from "./assets/qr.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: 600000
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ scan: this.randomIntFromInterval(600000, 650000) });
    }, 1000);
  }
  randomIntFromInterval(
    min,
    max // min and max included
  ) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello React
          </a>
        </header> */}
        <div style={{ textAlign: "center" }}>
          <img
            style={{
              width: window.innerWidth - 50,
              height: window.innerHeight / 3
            }}
            src={thuoc}
            alt="thuoc"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 13,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10
          }}
        >
          Viên uống giảm cân Thái Lan Lishou xanh (Phục Linh)
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              marginTop: 10
            }}
          >
            <img
              style={{ width: 20, height: 20, marginRight: 10 }}
              src={price}
              alt="price"
            />
            <div style={{ color: "#36bc9a" }}>600,000</div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              textAlign: "right",
              marginTop: 10,
              justifyContent: "flex-end"
            }}
          >
            <img
              style={{ width: 20, height: 20, marginRight: 10 }}
              src={thailan}
              alt="price"
            />
            Thái Lan
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 10
          }}
        >
          <img
            style={{ width: 20, height: 20, marginRight: 10 }}
            src={scan}
            alt="price"
          />
          <div>Số lượt truy cập :</div>
          <div style={{ color: "#36bc9a", marginLeft: 10 }}>
            {this.state.scan}
          </div>
        </div>
        <div style={{marginTop : 10, display : 'flex', flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center', marginLeft : 10}}>
          <img
            style={{ width: 20, height: 20, marginRight : 10 }}
            src={qr}
            alt="price"
          />
          Thông báo Chống giả xác thực nhiều lần
        </div>
        <div
          style={{
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
            border: "1px solid green",
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
            <img
              style={{ width: 40, height: 40, marginBottom : 10}}
              src={sucess}
              alt="price"
            />
            <div style={{ color: "#4fa906"}}>
              Sản phẩm là hàng chính hãng
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
