import CanvasJSReact from "../canvasjs.react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Statistics(props) {
  let individuals = props.records
    .map((stuff) => {
      return JSON.parse(stuff.fields.item)[0];
    })
    .reduce((a, c) => [...a, ...c], [])
    .reduce((a, c) => {
      if (!a[c]) {
        a[c] = 0;
      }
      a[c] += 1;
      return a;
    }, {});
  const dataPoints = Object.entries(individuals).map(([label, y]) => ({
    label,
    y,
  }));

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Dishes Ordered",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}",
        startAngle: -80,
        dataPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
