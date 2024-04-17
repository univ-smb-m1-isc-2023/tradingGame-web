'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ Data }: { Data: any[] }) {
  Data = Data.slice().reverse()
  return (
    <>
      <h2>Recharts Line Chart Component</h2>
      <div style={{ width: '100%', height: '1200px', overflowX: 'scroll' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={Data}>
            <XAxis dataKey="date"  domain={['auto', 'auto']} />
            <YAxis domain={['auto', 'auto']}  />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="blue" name="Open" />
            <Line type="monotone" dataKey="close" stroke="green" name="Close" />
            <Line type="monotone" dataKey="high" stroke="red" name="High" />
            <Line type="monotone" dataKey="low" stroke="orange" name="Low" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
