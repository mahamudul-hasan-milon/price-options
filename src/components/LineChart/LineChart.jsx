import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const mathMarks = [
    { id: 1, name: "Student 1", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Student 2", math: 85, physics: 79, chemistry: 88 },
    { id: 3, name: "Student 3", math: 92, physics: 90, chemistry: 85 },
    { id: 4, name: "Student 4", math: 66, physics: 70, chemistry: 72 },
    { id: 5, name: "Student 5", math: 74, physics: 68, chemistry: 80 },
    { id: 6, name: "Student 6", math: 88, physics: 84, chemistry: 90 },
    { id: 7, name: "Student 7", math: 95, physics: 92, chemistry: 94 },
    { id: 8, name: "Student 8", math: 81, physics: 76, chemistry: 79 },
    { id: 9, name: "Student 9", math: 70, physics: 65, chemistry: 68 },
    { id: 10, name: "Student 10", math: 83, physics: 87, chemistry: 82 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
