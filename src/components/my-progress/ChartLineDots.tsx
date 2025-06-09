import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

import { useTranslation } from "react-i18next";

export const description =
  "A line chart displaying extended monthly course progress";

const chartData = [
  { month: "Jan", progress: 0 },
  { month: "Feb", progress: 10 },
  { month: "Mar", progress: 25 },
  { month: "Apr", progress: 50 },
  { month: "May", progress: 70 },
  { month: "Jun", progress: 85 },
  { month: "Jul", progress: 95 },
  { month: "Aug", progress: 100 },
];

export function ChartLineProgress() {
  const { t } = useTranslation();

  const chartConfig = {
    progress: {
      label: t("progress_timeline.average_progress"),
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card className="bg-secondary-300 text-white border-0 mt-8">
      <CardHeader>
        <CardTitle>{t("progress_timeline.title")}</CardTitle>
        <CardDescription>{t("progress_timeline.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ top: 20, bottom: 20, left: 30, right: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white", fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `${value} ${t("progress_timeline.units")}`
              }
              tick={{ fill: "white", fontSize: 12 }}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="progress"
              type="monotone"
              stroke={chartConfig.progress.color}
              strokeWidth={3}
              dot={{ r: 5, fill: chartConfig.progress.color }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {t("progress_timeline.footer.line1")}{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {t("progress_timeline.footer.line2")}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartLineProgress;
