import React from "react";
import "./App.css";
import axios from "axios";
import ResultDisplay from "./components/result_display";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllData, sendList, sendQueryResults } from "./actions/action";
import Autocomplete from "react-autocomplete";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      regions: "",
      query: "",
      all_data: "",
      value: "",
      items: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/list",
    })
      .then((res) => {
        // const newData = res.data.filter(
        //   (elem, index) => res.data.indexOf(elem) === index
        // );
        // const autoComplete = [];
        // newData.forEach((ele) => autoComplete.push({ label: ele }));
        // this.setState({
        //   items: autoComplete,
        // });

        this.props.sendList(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: "get",
      url: "/search",
    })
      .then((res) => {
        console.log("hello res", res.data);
        const autoComplete = [];
        const final = [];
        res.data.forEach((elem) => autoComplete.push(elem.location));
        console.log(autoComplete);
        const newData = autoComplete.filter(
          (elem, index) => autoComplete.indexOf(elem) === index
        );
        console.log("dddddd", newData);

        newData.forEach((ele) => final.push({ label: ele }));
        this.setState({
          items: final,
        });

        this.props.getAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: "get",
      url: "/count",
    })
      .then((res) => {
        console.log("count", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postQuery = (e) => {
    e.preventDefault();
    console.log("triggered", this.state.query);
    if (this.state.query !== "") {
      axios({
        method: "post",
        url: `/search?king=${this.state.query}&location=${this.state.query}&type=${this.state.query}`,
      })
        .then((response) => {
          this.props.sendQueryResults(response.data);
          console.log("SEARCH", response.data, this.state.query);
          this.setState({
            query: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleQuery = (event) => {
    console.log("event", event.target.value);
    this.setState({ query: event.target.value, value: event.target.value });
  };

  handleSelect = (value) => {
    console.log("event", value);
    this.setState({ query: value, value: value });
  };

  render() {
    return (
      <div className='main'>
        <div className='heading'>Game of Thrones Battles</div>
        <div className='searchBar'>
          <form onSubmit={(e) => this.postQuery(e)}>
            <div class='input-group'>
              <Autocomplete
                getItemValue={(item) => item.label}
                items={this.state.items}
                renderItem={(item, isHighlighted) => (
                  <div
                    className='list'
                    style={{
                      background: isHighlighted ? "lightgray" : "white",
                      color: "black",
                      lineHeight: "50px",
                    }}>
                    {item.label}
                  </div>
                )}
                value={this.state.value}
                onChange={(e) => this.handleQuery(e)}
                onSelect={(value) => this.handleSelect(value)}
              />
              <div class='input-group-append'>
                <button class='btn btn-primary btn-sm' type='submit'>
                  <i class='fa fa-search'></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <ResultDisplay />
        </div>
      </div>
    );
  }
}

const getDataFromRedux = (state) => {
  console.log("in profile", state.battles.all_battles);
  return {
    all_data: state.battles.all_battles,
  };
};

const giveDataToRedux = (dispatch) => {
  return bindActionCreators(
    { getAllData, sendList, sendQueryResults },
    dispatch
  );
};

export default connect(getDataFromRedux, giveDataToRedux)(App);
