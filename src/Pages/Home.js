import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Widget from "../Component/Widget/Widget";
import Chart from "../Component/Chart/Chart";

const Home = () => {
  const [widgetData, setwidgetData] = useState();
  const [ChartData, setChartData] = useState();
  const [deathCoun, setdeathCoun] = useState()

  const url = "https://pomber.github.io/covid19/timeseries.json";
  const getData = async () => {
    var { data } = await axios.get(url);
    data = data["India"];
    let deathCount = [];
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      obj["date"] = data[i].date;
      obj["Death"] =
        i == 0
          ? data[i]["deaths"]
          : Math.abs(data[i - 1]["deaths"] - data[i]["deaths"]);
      deathCount.push(obj);
    }
    setdeathCoun(deathCount);

    setChartData(data);
    const newwidgetdata = [data[data.length - 2], data[data.length - 1]];
    setwidgetData(newwidgetdata);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {widgetData && (
        <>
          {" "}
          <Widget data={widgetData} />
          <Chart data={deathCoun} name={"Death"} />
          <Chart data={ChartData} name={"confirmed"} />
        </>
      )}
    </Container>
  );
};

export default Home;
