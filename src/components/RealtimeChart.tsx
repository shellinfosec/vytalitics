import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RealtimeChartProps {
  isVisible: boolean;
}

const RealtimeChart = ({ isVisible }: RealtimeChartProps) => {
  const [data, setData] = useState(() => {
    const initialData = [];
    const now = Date.now();
    for (let i = 29; i >= 0; i--) {
      initialData.push({
        time: new Date(now - i * 2000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        visitors: Math.floor(Math.random() * 30) + 70,
        conversions: Math.floor(Math.random() * 15) + 15,
      });
    }
    return initialData;
  });

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        const lastVisitors = prevData[prevData.length - 1].visitors;
        const lastConversions = prevData[prevData.length - 1].conversions;
        
        // Simulate realistic fluctuations
        const newVisitors = Math.max(
          50,
          Math.min(100, lastVisitors + (Math.random() - 0.5) * 10)
        );
        const newConversions = Math.max(
          10,
          Math.min(30, lastConversions + (Math.random() - 0.5) * 5)
        );

        newData.push({
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          visitors: Math.floor(newVisitors),
          conversions: Math.floor(newConversions),
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(181 82% 26%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(181 82% 26%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(166 25% 70%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(166 25% 70%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(228 30% 25% / 0.3)" />
        <XAxis
          dataKey="time"
          stroke="hsl(200 15% 65%)"
          tick={{ fontSize: 10 }}
          tickFormatter={(value) => value.split(":").slice(0, 2).join(":")}
        />
        <YAxis stroke="hsl(200 15% 65%)" tick={{ fontSize: 10 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(228 40% 16%)",
            border: "1px solid hsl(228 30% 25%)",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          labelStyle={{ color: "hsl(160 33% 95%)" }}
        />
        <Area
          type="monotone"
          dataKey="visitors"
          stroke="hsl(181 82% 26%)"
          strokeWidth={2}
          fill="url(#colorVisitors)"
          animationDuration={300}
        />
        <Area
          type="monotone"
          dataKey="conversions"
          stroke="hsl(166 25% 70%)"
          strokeWidth={2}
          fill="url(#colorConversions)"
          animationDuration={300}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RealtimeChart;
