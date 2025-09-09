"use client"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { d: 1, v: 8 }, { d: 2, v: 12 }, { d: 3, v: 10 }, { d: 4, v: 14 },
  { d: 5, v: 9 }, { d: 6, v: 11 }, { d: 7, v: 13 }, { d: 8, v: 12 },
  { d: 9, v: 10 }, { d:10, v: 9 }, { d:11, v:11 }, { d:12, v:12 },
  { d:13, v:10 }, { d:14, v:14 },
]
export default function BookingsChart(){
  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, left: 0, right: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="peach" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FF9F3E" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#FF9F3E" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(12,19,32,0.05)" vertical={false}/>
          <Tooltip cursor={{ stroke: "rgba(12,19,32,0.1)" }} contentStyle={{ borderRadius: 12, border: "1px solid rgba(12,19,32,0.06)" }}/>
          <Area type="monotone" dataKey="v" stroke="#FF9F3E" strokeWidth={2} fill="url(#peach)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
