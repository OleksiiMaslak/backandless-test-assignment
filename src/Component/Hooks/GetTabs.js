import axios from "axios";

const GetTabs = ({ params }) => {
    async function fetchTabs() {
        try {
            const response = await axios.get(
                "https://raw.githubusercontent.com/OleksiiMaslak/backandless-test-assignment/master/tabs.json"
            );
            console.log(params);
            return {
                params
            };
        } catch (error) {
            console.error("Error occured" - error);
        }
    }
    fetchTabs();
};

export default GetTabs;
