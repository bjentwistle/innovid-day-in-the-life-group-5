const fooCampaigns = [
  {
    id: 163461455,
    title: 'Campaign 1',
    startdate: '01/01/2023',
    enddate: '31/02/2023',
    totalImpressions: 1113,
    totalResponse: 11008,
  },
  {
    id: 163461454,
    title: 'Campaign 2',
    startdate: '01/04/2023',
    enddate: '27/08/2023',
    totalImpressions: 1234551113,
    totalResponse: 55611008,
  },
  {
    id: 163461453,
    title: 'Campaign 3',
    startdate: '09/09/2021',
    enddate: '31/10/2021',
    totalImpressions: 12133,
    totalResponse: 13408,
  },
];

function App() {
  // const campaignList = fooCampaigns.map((campaign) => (
  //   <li key={campaign.id}>
  //     {campaign.title} | start date: {campaign.startdate} | end date:{' '}
  //     {campaign.enddate} | Total Impressions {campaign.totalImpressions} | Total
  //     Responses {campaign.totalResponse}
  //   </li>
  // ));



  return (
    <>
      <h1>List of Campaigns</h1>
      <table className="campaign-table">
        <thead>
        <tr className="table-header">
          <th className="campaign-col">Campaign</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Impressions</th>
          <th>Responses</th>
        </tr>
        </thead>
        <tbody>
        {fooCampaigns.map(campaign => (
          <tr key={campaign.id}>
            <td className="campaign-col">{campaign.title}</td>
            <td>{campaign.startdate}</td>
            <td>{campaign.enddate}</td>
            <td>{campaign.totalImpressions}</td>
            <td>{campaign.totalResponse}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
