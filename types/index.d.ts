import { Chart, ChartComponent, ChartType, TimeScale, TimeScaleOptions, Plugin } from 'chart.js';
import { TradeRequest } from './trade-request';

interface Options{
    period:number;
    trades:TradeRequest[];
}

declare module 'chart.js' {
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface PluginOptionsByType<TType extends ChartType> {
      trades?: Options;
    }
  }
  
  declare const registerables: ChartComponent[];
  
  export const TradesPlugin: Plugin;
  export default registerables;
