import { Label, Pie, PieChart, Cell } from "recharts";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export const description =
  "A donut chart showing total course duration in hours";

const chartData = [
  { course: "databases", classes: 46 },
  { course: "backend", classes: 28 },
  { course: "frontend", classes: 36 },
  { course: "js", classes: 42 },
];

// Factor de conversión de clases a horas
const conversionFactor = 0.7143;

const computedChartData = chartData.map((item) => ({
  ...item,
  hours: Math.round(item.classes * conversionFactor),
}));

// Se calcula el total de horas de todos los cursos
const totalHours = computedChartData.reduce((acc, curr) => acc + curr.hours, 0);

export function ChartPieDonutText() {
  const { t } = useTranslation();

  const chartConfig = {
    databases: {
      label: t("progress_donut.courses.databases_sql"),
      color: "hsl(var(--chart-1))",
    },
    backend: {
      label: t("progress_donut.courses.backend_nodejs"),
      color: "hsl(var(--chart-2))",
    },
    frontend: {
      label: t("progress_donut.courses.frontend_react"),
      color: "hsl(var(--chart-3))",
    },
    js: {
      label: t("progress_donut.courses.basic_js"),
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col bg-secondary-300 text-white border-0 mt-8">
      <CardHeader className="items-center pb-0">
        <CardTitle>{t("progress_donut.title")}</CardTitle>
        <CardDescription>{t("progress_donut.description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={computedChartData}
              dataKey="hours"
              nameKey="course"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          {totalHours}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {t("progress_donut.total_hours")}
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
              {computedChartData.map((entry) => {
                const config = chartConfig[entry.course];
                return (
                  <Cell key={`cell-${entry.course}aa`} fill={config?.color} />
                );
              })}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-2">
        {/* Leyenda personalizada */}
        <div className="flex flex-col gap-1">
          {computedChartData.map((entry) => {
            const config = chartConfig[entry.course];
            return (
              <div
                key={entry.course}
                className="flex items-center text-white text-sm"
              >
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: config?.color }}
                ></span>
                <span>
                  {config?.label} {entry.hours} {t("progress_donut.hours")}
                </span>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartPieDonutText;
