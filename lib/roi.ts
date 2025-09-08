export function computeROI({ teamSize, hoursPerWeek, hourly = 35, efficiency = 0.7 }: {
  teamSize: number
  hoursPerWeek: number
  hourly?: number
  efficiency?: number
}) {
  const monthlyHours = teamSize * hoursPerWeek * 4.3;
  const savedHours = monthlyHours * efficiency;
  const savings = savedHours * hourly;
  const price = 1500; // TODO: read from pricing if available
  const paybackWeeks = Math.max(1, Math.round((price / (savings/4.3))));
  return { savings, paybackWeeks };
}

export function generateSparklineData(weeks: number = 12): number[] {
  const data: number[] = [];
  for (let i = 0; i < weeks; i++) {
    const base = 0.3 + (Math.random() * 0.4);
    const trend = Math.sin(i * 0.5) * 0.1;
    data.push(Math.max(0.1, Math.min(0.9, base + trend)));
  }
  return data;
}
