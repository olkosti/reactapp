import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 9],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 4],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};

function App() {
  return (
    <>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </>
  );
}

export default App;
