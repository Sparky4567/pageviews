import React, { Component } from "react";
class SharethisComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      data: null,
    };
    this.apiUrl = "https://pageviews.artefaktas.eu/api";
    this.settings = {
      errorMessage: `No data to show`,
      style: {
        fontSize: 42 + `px`,
        color: `#25a186`,
      },
    };
  }

  componentDidMount() {
    const fetchUrl = this.apiUrl;
    const customInit = {
      headers: {
        "User-Agent": "artefaktasbot",
        passedUrl: this.state.url,
      },
    };
    async function getData(fetchUrl) {
      const res = await fetch(fetchUrl, customInit);
      const parsed = await res.json();
      return parsed;
    }
    getData(fetchUrl)
      .then((data) => {
        this.setState({ data: data.viewcount });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.data !== null ? (
      <div>
        <p style={this.settings.style}>
          <i className="fa fa-line-chart"></i> {this.state.data}
        </p>
      </div>
    ) : (
      <div>{this.settings.errorMessage}</div>
    );
  }
}

export default SharethisComponent;
