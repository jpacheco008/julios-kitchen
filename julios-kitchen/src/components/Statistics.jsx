import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Statistics(props) {
  let info = [];
  props.records.map((stuff) => {
    return info.push(JSON.parse(stuff.fields.item)[0]);
  });
  let individuals = [];
  info.forEach((item) => {
    const iterator = item.values();
    for (const value of iterator) {
      individuals.push(value);
    }
  });
  console.log(individuals);
  let guacamoleCounter = 0;
  let empanadasCounter = 0;
  let stewCounter = 0;
  let cremeBrûléeCounter = 0;
  let cevicheCounter = 0;
  let salmonCounter = 0;
  let fishCounter = 0;
  let risottoCounter = 0;
  let banderaCounter = 0;
  let arrozConLecheCounter = 0;
  let strawberriesCounter = 0;

  for (let i = 0; i < individuals.length; i++) {
    if (individuals[i] === "Guacamole") {
      guacamoleCounter++;
    } else if (individuals[i] === "Argentinian Beef Empanadas") {
      empanadasCounter++;
    } else if (individuals[i] === "Irish Beef Stew") {
      stewCounter++;
    } else if (individuals[i] === "Blueberry Creme Brûlée") {
      cremeBrûléeCounter++;
    } else if (individuals[i] === "Red Snapper Ceviche") {
      cevicheCounter++;
    } else if (individuals[i] === "Salmon with Garlic and Dijon") {
      salmonCounter++;
    } else if (individuals[i] === "Crispy Almond Fish") {
      fishCounter++;
    } else if (individuals[i] === "Mushroom Risotto") {
      risottoCounter++;
    } else if (individuals[i] === "Bandera Dominicana") {
      banderaCounter++;
    } else if (individuals[i] === "Arroz con Leche") {
      arrozConLecheCounter++;
    } else if (individuals[i] === "Strawberries Romanoff") {
      strawberriesCounter++;
    }
  }
  console.log(strawberriesCounter);

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
        dataPoints: [
          { y: guacamoleCounter, label: "Guacamole" },
          { y: empanadasCounter, label: "Beef Empanadas" },
          { y: stewCounter, label: "Irish Beef Stew" },
          { y: cremeBrûléeCounter, label: "Creme Brûlée" },
          { y: cevicheCounter, label: "Ceviche" },
          { y: salmonCounter, label: "Salmon" },
          { y: fishCounter, label: "Almond Fish " },
          { y: risottoCounter, label: "Risotto" },
          { y: banderaCounter, label: "Bandera Dominicana" },
          { y: arrozConLecheCounter, label: "Arroz con Leche" },
          { y: strawberriesCounter, label: "Strawberries Romanoff" },
        ],
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
