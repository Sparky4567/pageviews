import React, { Component } from "react";
import SharethisComponent from "../sharethiscomponent/SharethisComponent";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      bg: null,
    };
    this.pStyle = {
      color: `#25a186`,
      fontWeight: `bold`,
      textAlign: `left`,
    };

    this.settings = {
      brand: `Artefaktas.eu`,
    };
  }

  componentDidMount() {
    if (String(window.location.search) !== "") {
      let searchParams = String(window.location.href);
      let paramUlr;
      switch (true) {
        case searchParams.includes("?url") && !searchParams.includes("?bg="):
          paramUlr = searchParams.split("?url=")[1];
          this.setState({ url: paramUlr });
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-left vh-100 align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div>
              {this.state.url !== null &&
              typeof this.state.url !== "undefined" ? (
                <SharethisComponent url={this.state.url} />
              ) : (
                ""
              )}
            </div>
            {/* <p style={this.pStyle}>{this.settings.brand}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
