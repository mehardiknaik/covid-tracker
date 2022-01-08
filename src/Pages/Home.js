import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Widget from "../Component/Widget/Widget";
import Chart from "../Component/Chart/Chart";

const Home = () => {
  const [widgetData, setwidgetData] = useState();
  const [ChartData, setChartData] =useState()
  
  const url = "https://pomber.github.io/covid19/timeseries.json";
  const getData = async () => {
    var { data } = await axios.get(url);
    data = data["India"];
    setChartData(data)
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
          <Chart data={ChartData}/>
        </>
      )}
    </Container>
  );
};

export default Home;
