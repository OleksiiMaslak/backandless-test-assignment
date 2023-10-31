import axios from "axios";

const GetTabsId = async () => {
    
    try {
        const response = await axios.get(
            "https://raw.githubusercontent.com/OleksiiMaslak/backandless-test-assignment/master/tabs.json"
        )
        console.log(response.data.tabs)
        return  response.data.tabs
    } catch (error) {
        console.error("Error occured" - error);
    }

    };

export default GetTabsId;
