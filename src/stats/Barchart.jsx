/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Userdata } from "./Data";
import Chart from "chart.js/auto";
import "./Barchart.scss";
// function Barchart({ chartdata }) {
//     const chartvalue = parseInt(chartdata);
//     const [object, setObject] = useState({});
//     const handel = () => {
//         Userdata.forEach((data) => {
//             if (data.year == chartvalue) {
//                 setObject(data);
//                 return data;
//             }
//         })
//     }
//     useEffect(handel, [chartvalue])

//     return (
//         <div>
//             <Bar
//                 data={{
//                     labels: object.dataset.map((data) => data.label),
//                     datasets: [
//                         {
//                             label: `Placement Stats of ${object.year}`,
//                             data: object.dataset.map((data) => data.value),
//                             backgroundColor: ['lightblue', 'gray']
//                         }
//                     ],
//                 }}
//             />
//         </div>
//     )
// }

function Barchart({ chartdata }) {
  const chartvalue = parseInt(chartdata);
  const [object, setObject] = useState({});

  useEffect(() => {
    const handleData = () => {
      const foundData = Userdata.find((data) => data.year === chartvalue);
      if (foundData) {
        setObject(foundData);
      }
    };
    handleData();
  }, [chartvalue]);

  if (!object.dataset) {
    // alert('hello')
    return null; // or some loading indicator or placeholder
  }

  return (
    <div className="barchart flex flex-col gap-4  items-center">
      <Bar
        data={{
          labels: object.dataset.map((data) => data.label),
          datasets: [
            {
              label: `Placement Stats of ${object.year}`,
              data: object.dataset.map((data) => data.value),
              backgroundColor: ["lightblue", "gray"],
            },
          ],
        }}
      />
      <ol className="text-black gap-7 text flex">
        <li>{`Average package:${object.AveragePackage}`}</li>
        <li>{`Median package:${object.MedianPackage}`}</li>
        <li>{`Lowest package:${object.LowestPackage}`}</li>
      </ol>
    </div>
  );
}

export default Barchart;
