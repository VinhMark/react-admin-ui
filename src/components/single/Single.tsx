import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './single.scss';

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo'>
            {props.img && <img src={props.img} alt='' />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>

          <div className='details'>
            {Object.entries(props.info).map((item) => (
              <div className='item'>
                <span className='itemTitle'>{item[0]}</span>
                <span className='itemValue'>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />

        {props.chart && (
          <div className='chart'>
            <LineChart
              width={730}
              height={250}
              data={props.chart.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey) => (
                <Line type='monotone' dataKey={dataKey.name} stroke={dataKey.color} />
              ))}
            </LineChart>
          </div>
        )}
      </div>

      <div className='activities'>
        <h2>Lasted Activities</h2>

        {props.activities &&
          props.activities.map((activity) => (
            <ul>
              <li>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Single;
