import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";

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

import { useTranslation } from "react-i18next";

export const description = "A bar chart showing course progress";

// Datos actualizados: cada curso y su progreso (en porcentaje)
const chartData = [
  { course: "databases", progress: 0 },
  { course: "backend", progress: 30 },
  { course: "frontend", progress: 100 },
  { course: "js", progress: 100 },
];

export function ChartBarMixed() {
  const { t } = useTranslation();

  // Configuración del gráfico: se asigna una etiqueta y un color a cada curso.
  const chartConfig = {
    databases: {
      label: t("progress_status.courses.databases_sql"),
      color: "hsl(var(--chart-1))",
    },
    backend: {
      label: t("progress_status.courses.backend_nodejs"),
      color: "hsl(var(--chart-2))",
    },
    frontend: {
      label: t("progress_status.courses.frontend_react"),
      color: "hsl(var(--chart-3))",
    },
    js: {
      label: t("progress_status.courses.basic_js"),
      color: "hsl(var(--chart-4))",
    },
  } as ChartConfig; // Reemplazo de "satisfies ChartConfig" por "as ChartConfig" para evitar errores

  // Renderizado personalizado del tick del eje Y para garantizar que el texto
  // se muestre en una línea completa.
  const renderCustomYAxisTick = (props: any): JSX.Element => {
    const { x, y, payload } = props;
    const key = payload.value as keyof typeof chartConfig;
    const label = chartConfig[key]?.label;
    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={12}
        style={{ whiteSpace: "nowrap" }}
        textAnchor="end"
        dominantBaseline="middle"
        dx={-5}
      >
        {label}
      </text>
    );
  };

  return (
    <Card className="bg-secondary-300 text-white border-0 mt-8">
      <CardHeader>
        <CardTitle>{t("progress_status.title")}</CardTitle>
        <CardDescription>{t("progress_status.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, bottom: 10, left: 50, right: 10 }}
          >
            <YAxis
              dataKey="course"
              type="category"
              tickLine={false}
              tickMargin={20}
              tick={renderCustomYAxisTick}
              width={120}
            />
            <XAxis dataKey="progress" type="number" hide domain={[0, 100]} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="progress"
              layout="vertical"
              radius={5}
              barSize={20} // Controla el grosor de la barra
              minPointSize={5} // Muestra una barra mínima incluso cuando progress es 0
            >
              {chartData.map((entry) => {
                const config =
                  chartConfig[entry.course as keyof typeof chartConfig];
                return (
                  <Cell key={`cell-${entry.course}`} fill={config?.color} />
                );
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {t("progress_status.footer.line1")} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {t("progress_status.footer.line2")}
        </div>
        <div className="text-muted-foreground leading-none">
          {t("progress_status.footer.line3")}
        </div>
        <div className="text-muted-foreground leading-none">
          {t("progress_status.footer.line4")}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartBarMixed;
