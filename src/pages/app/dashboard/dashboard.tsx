import { Helmet } from 'react-helmet-async'

import { DailyOrdersAmountCard } from './components/daily-orders-amount-card/daily-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './components/month-canceled-orders-amount/month-canceled-orders-amount'
import { MonthRevenueCard } from './components/month-orders-amount-card/month-orders-amount-card'
import { MonthOrdersAmountCard } from './components/month-revenue-card/month-revenue-card'
import { RevenueChart } from './components/popular-products-chart/popular-products-chart'
import { PopularProductsChart } from './components/revenue-chart/revenue-chart'

export const DashboardPage = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DailyOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <PopularProductsChart />
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
