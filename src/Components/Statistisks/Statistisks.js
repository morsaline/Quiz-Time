import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistisks.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistisks = () => {
  const { data } = useLoaderData();
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={700}
        data={data}
        margin={{
          top: 70,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ stroke: "yellow" }} />
        <YAxis tick={{ stroke: "yellow" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Statistisks;
