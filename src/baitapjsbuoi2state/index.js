import React, { Component } from "react";

export default class Baitapjsbuoi2 extends Component {
  glass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g1.jpg",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g2.jpg",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g3.jpg",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g4.jpg",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g5.jpg",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g6.jpg",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g7.jpg",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g8.jpg",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      urlImageShow: "./glassesImage/g9.jpg",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    };
  }

  tryGlass = (item) => {
    this.setState({
      price: item.price,
      name: item.name,
      url: item.url,
      desc: item.desc,
    });
  };

  renderImageShow = () => {
    return this.glass.map((item, index) => {
      return (
        <div className="col-md-3" key={index}>
          <img
            src={item.url}
            alt=""
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={() => this.tryGlass(item)}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>TRY GLASSES APP ONLINE</h3>
        <div className="model" style={{ position: "relative" }}>
          <img
            src="./glassesImage/model.jpg"
            alt=""
            style={{ height: "500px", width: "350px" }}
          />
          <div className="glass">
            <img
              src={this.state.url}
              alt=""
              style={{
                height: "100px",
                width: "200px",
                position: "absolute",
                top: "20%",
                left: "41.2%",
              }}
            />
            <div
              className="overlay"
              style={{
                opacity: "1",
                position: "absolute",
                left: "380px",
                top: "70%",
                width: "350px",
                height: "150px",
                padding: "20px",
                color: "red",
                backgroundColor: 'rgba(255, 165, 0, 0.5)',
              }}
            >
              <h5>{this.state.name}</h5>
              <p>{this.state.desc}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#eff1f1",
            height: "400px",
            margin: "50px",
          }}
        >
          <div className="row">{this.renderImageShow()}</div>
        </div>
      </div>
    );
  }
}
