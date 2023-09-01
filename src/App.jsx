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
import { useEffect, useState } from "react";
function App() {
  // const campaignList = fooCampaigns.map((campaign) => (
  //   <li key={campaign.id}>
  //     {campaign.title} | start date: {campaign.startdate} | end date:{' '}
  //     {campaign.enddate} | Total Impressions {campaign.totalImpressions} | Total
  //     Responses {campaign.totalResponse}
  //   </li>
  // ));
  const [apiCampaigns, setApiCampaigns] = useState([])
  const [campaigns, setCampaigns] = useState(fooCampaigns);

  // const fetchFunction = async (url)=>{
  //   const res = await fetch(
  //     url,
  //     {mode: 'no-cors'}
  //     );

  //   console.log(res);
  //   const data = res.json();
  //   setApiCampaigns(data);
  // }

  function formatDates (){

    for (let idx = 0; idx < fooCampaigns.length; idx += 1){
      console.log(fooCampaigns[idx]);
      let startdate = fooCampaigns[idx].startdate.split(/\//);
      fooCampaigns[idx].startdate = [startdate[1],startdate[0],startdate[2]].join('/');
      let enddate = fooCampaigns[idx].enddate.split(/\//);
      fooCampaigns[idx].enddate = [enddate[1], enddate[0], enddate[2]].join('/');
    }
    setCampaigns(fooCampaigns);

  }

  //format numbers 
  function formatNumbers(){
  
    for (let idx = 0; idx < fooCampaigns.length; idx += 1){
      let totalImpressions = fooCampaigns[idx].totalImpressions;
      let totalResponse = fooCampaigns[idx].totalResponse;
      switch (true) {
        case totalImpressions >= 1000000000: // For billions
        fooCampaigns[idx].totalImpressions = (totalImpressions / 1000000000).toFixed(1) + 'b';
        fooCampaigns[idx].totalResponse = (totalResponse / 1000000000).toFixed(2) + 'b';
      
          break;
        case totalImpressions >= 1000000: // For millions
        fooCampaigns[idx].totalImpressions = (totalImpressions / 1000000).toFixed(1) + 'm';
        fooCampaigns[idx].totalResponse = (totalResponse / 1000000).toFixed(2) + 'm';
       
          break;
        case totalImpressions >= 1000: // For thousands
        fooCampaigns[idx].totalImpressions = (totalImpressions / 1000).toFixed(1) + 'k';
        fooCampaigns[idx].totalResponse = (totalResponse / 1000).toFixed(2) + 'k';
   
          break;
        default:
          fooCampaigns[idx].totalImpressions = totalImpressions.toString();
          fooCampaigns[idx].totalResponse = totalResponse.toString();
        
      }
      
    }
    setCampaigns(fooCampaigns.totalImpressions,
                fooCampaigns.totalResponse);

  }

  useEffect(()=>{
    formatDates();
    formatNumbers();
    
    // fetchFunction("https://cclan.s3.eu-west-1.amazonaws.com/campaigns.json")
    // fetch("http://localhost:9000/api/campaigns")
    // .then((res)=>res.json())
    // .then((data)=>{
    //   console.log(data)
    //   setApiCampaigns(data)
    // })
  }, [])


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
