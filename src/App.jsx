import { useEffect, useState } from "react";
//import IndividualPage from "./components/IndividualPage";

function App() {

  const apiUrl = "https://cclan.s3.eu-west-1.amazonaws.com/campaigns.json";

  const [apiCampaigns, setApiCampaigns] = useState([]);
  //const [campaigns, setCampaigns] = useState(apiCampaigns);

  const fetchFunction = async (url)=>{

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log("data from fetch", data)

      // Format the data immediately after fetching
      const formattedData = formatData(data);
      
      //setApiCampaigns(formattedData);
      // setApiCampaigns(data);
        

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
  } 
  
  // function formatDates(campaigns) {
  // const formattedCampaigns = campaigns.map((campaign) => {
  //   const hasStartDate = campaign.startdate;
  //   const hasEndDate = campaign.enddate;

  //   if (hasStartDate || hasEndDate) {
  //     if (hasStartDate) {
  //       const startdate = campaign.startdate.split(/\//);
  //       const formattedStartDate = [startdate[1], startdate[0], startdate[2]].join('/');
  //       campaign.startdate = formattedStartDate;
  //     }

  //     if (hasEndDate) {
  //       const enddate = campaign.enddate.split(/\//);
  //       const formattedEndDate = [enddate[1], enddate[0], enddate[2]].join('/');
  //       campaign.enddate = formattedEndDate;
  //     }
  //   }

  //   return {
  //     ...campaign.startdate,
  //     ...campaign.enddate
  //   };
    
  // });

  
// }
  
  function formatData(campaigns) {
    const formattedCampaigns = campaigns.map((campaign) => {
      let totalImpressions = campaign.totalImpressions;
      let totalResponse = campaign.totalResponse;
      const hasStartDate = campaign.startdate;
      const hasEndDate = campaign.enddate;

    if (hasStartDate || hasEndDate) {
      if (hasStartDate) {
        const startdate = campaign.startdate.split(/\//);
        const formattedStartDate = [startdate[1], startdate[0], startdate[2]].join('-');
        campaign.startdate = formattedStartDate;
      }

      if (hasEndDate) {
        const enddate = campaign.enddate.split(/\//);
        const formattedEndDate = [enddate[1], enddate[0], enddate[2]].join('-');
        campaign.enddate = formattedEndDate;
      }
  
    }
      switch (true) {
        case totalImpressions >= 1000000000: // For billions
          totalImpressions = (totalImpressions / 1000000000).toFixed(1) + 'b';
          totalResponse = (totalResponse / 1000000000).toFixed(1) + 'b';
          break;
        case totalImpressions >= 1000000: // For millions
          totalImpressions = (totalImpressions / 1000000).toFixed(1) + 'm';
          totalResponse = (totalResponse / 1000000).toFixed(1) + 'm';
          break;
        case totalImpressions >= 1000: // For thousands
          totalImpressions = (totalImpressions / 1000).toFixed(1) + 'k';
          totalResponse = (totalResponse / 1000).toFixed(1) + 'k';
          break;
        default:
          totalImpressions = totalImpressions;
          totalResponse = totalResponse;
      }
    
      return {
        ...campaign,
        totalImpressions,
        totalResponse,
      };
  });
    setApiCampaigns(formattedCampaigns);
    console.log("formatted numbers", formattedCampaigns)
    
  }


  useEffect(()=>{
    fetchFunction(apiUrl)
  }, [])

  // useEffect(() => {
  //   // Check if apiCampaigns has data
  //   //if (apiCampaigns.length > 0) {
  //     formatDates();
  //     formatNumbers();
  //   //}
  // }, []);
  

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
        {apiCampaigns.map(campaign => (
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
      {/* <IndividualPage campaignId={apiCampaigns.id} campaigns={apiCampaigns}/> */}
    </>
  );
}

export default App;
