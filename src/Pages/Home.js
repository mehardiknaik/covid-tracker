import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Widget from "../Component/Widget/Widget";
import Chart from "../Component/Chart/Chart";
import PieChart from "../Component/PieChart/PieChart";
import Loader from "../Component/Loader/Loader";

const Home = () => {
  const [widgetData, setwidgetData] = useState();
  const [newCases, setnewCases] = useState();
  const [piechartdata, setpiechartdata] = useState();

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

    let piedata = deathCount[deathCount.length - 1];

    setwidgetData(widgetobj);

    setnewCases(deathCount);

    setpiechartdata(piedata);
  };
  useEffect(() => {
    getData();
  }, []);
  return widgetData && newCases && piechartdata ? (
    <Container>
      <Widget data={widgetData?.Death} name={"Death"} />
      <Widget data={widgetData?.Confirmed} name={"Confirmed"} />
      <Chart data={newCases} name={"Death"} />
      <Chart data={newCases} name={"Confirmed"} />
      <PieChart data={piechartdata} />
    </Container>
  ) : (
    <Loader />
  );
};

export default Home;
