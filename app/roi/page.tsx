import { Metadata } from 'next'
import RoiHero from '@/components/roi/RoiHero'
import MiniRoiCalculator from '@/components/roi/MiniRoiCalculator'
import RoiKpi from '@/components/roi/RoiKpi'
import { BreakevenGauge } from '@/components/roi/BreakevenGauge'
import { Sparkline } from '@/components/roi/Sparkline'

export const metadata: Metadata = {
  title: 'ROI Calculator',
  description: 'Calculate the return on investment for AI automation services'
}

export default function ROIPage() {
  return (
    <div className="min-h-screen">
      <RoiHero teamSize={10} hourlyCost={50} weeklyHoursSaved={20} adoptionPct={80} />
      <MiniRoiCalculator />
      <RoiKpi label="ROI" value="340%" />
      <BreakevenGauge months={2.5} />
      <Sparkline />
    </div>
  )
}