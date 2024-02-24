import * as React from "react";
import "../styles/Attendance.scss";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
    { label: "Present", value: 400, color: "#0088FE" },
    { label: "Absent", value: 300, color: "#00C49F" },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export default function Attendance() {
    return (
        <div className="rootAttendance">
            <h3>Attendance</h3>
            <div className="chart">
                <PieChart
                    series={[
                        {
                            outerRadius: 80,
                            data,
                            arcLabel: getArcLabel,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: "white",
                            fontSize: 14,
                        },
                    }}
                    {...sizing}
                />
            </div>
        </div>
    );
}
