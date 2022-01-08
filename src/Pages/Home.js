import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Widget from "../Component/Widget/Widget";
import Chart from "../Component/Chart/Chart";
import Loader from "react-loader-spinner";
import { Color } from "../Component/Color";
import Header from "../Component/Header/Header";

const Home = () => {
  const [widgetData, setwidgetData] = useState();
  const [newCases, setnewCases] = useState();

  const url = "https://pomber.github.io/covid19/timeseries.json";
  const getData = async () => {
    var { data } = await axios.get(url);
    data = data["India"];
    let deathCount = [];
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      obj["date"] = data[i].date;
      obj["Death"] =
        i === 0
          ? data[i]["deaths"]
          : Math.abs(data[i - 1]["deaths"] - data[i]["deaths"]);
      obj["Confirmed"] =
        i === 0
          ? data[i]["confirmed"]
          : Math.abs(data[i - 1]["confirmed"] - data[i]["confirmed"]);
      deathCount.push(obj);
    }
    let widgetobj = {};
    widgetobj["Death"] = {
      total: data[data.length - 1]["deaths"],
      newCase: deathCount[deathCount.length - 1]["Death"],
      date: new Date(data[data.length - 1]["date"]),
    };
    widgetobj["Confirmed"] = {
      total: data[data.length - 1]["confirmed"],
      newCase: deathCount[deathCount.length - 1]["Confirmed"],
      date: new Date(data[data.length - 1]["date"]),
    };
    setwidgetData(widgetobj);

    setnewCases(deathCount);
  };
  useEffect(() => {
    getData();
  }, []);
  return widgetData && newCases ? (
    <>
      <Header />
      <Container>
        <Widget data={widgetData?.Death} name={"Death"} />
        <Widget data={widgetData?.Confirmed} name={"Confirmed"} />
        <Chart data={newCases} name={"Death"} />
        <Chart data={newCases} name={"Confirmed"} />
      </Container>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
      }}
    >
      <Loader type="Puff" color={Color()} height={100} width={100} />
    </div>
  );
};

export default Home;
