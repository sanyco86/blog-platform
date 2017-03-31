import React, { PropTypes } from 'react'
import PieChart from 'components/widgets/PieChart'

const PieChartContainer = ({items}) => {
  const pieChartData = items.map(
    (item) => ([item.title, item.meta.likes.count || 0])
  );

  return (
    <PieChart data={pieChartData} />
  );
};

PieChartContainer.propTypes = {
  items: PropTypes.array
};

export default PieChartContainer
