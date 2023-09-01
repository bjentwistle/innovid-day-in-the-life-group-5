import { useEffect, useState } from "react";

const IndividualPage = ({campaignId , campaigns})=>{
    const [campaign, setCampaign] = useState({})
    useEffect(()=>{
    setCampaign(campaigns.filter(campaign=>campaign.id==campaignId))

    },[])

    // fetch(
    //     "https://cclan.s3.eu-west-1.amazonaws.com/campaign_results.json"
    //         ).then(
    //     res=>res.json()
    //     ).then(
    //     data=>setCampaign(data.filter(datum=>datum.campaign_id==campaignId))
    //     )



    return(<>


    </>);
};
export default IndividualPage;