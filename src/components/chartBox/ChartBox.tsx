import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import './chatBox.scss';
import { Link } from 'react-router-dom';

type Props = {
  icon: string;
  title: string;
  number: string;
  chartData: object[];
  dataKey: string;
  color: string;
  percentage: number;
};

const ChartBox = (props: Props) => {
  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          <img src={props.icon} alt='' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={props.chartData}>
              <Tooltip
                position={{ x: 20, y: 60 }}
                labelStyle={{ display: 'none' }}
                contentStyle={{ background: 'transparent', border: 'none' }}
              />
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span
            className='percentage'
            style={{ color: props.percentage > 0 ? 'lightgreen' : 'tomato' }}
          >
            {props.percentage}%
          </span>
          <span className='duration'>This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
