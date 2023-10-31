

const GetTabs = () => {
        try {
            const response = fetch('https://raw.githubusercontent.com/OleksiiMaslak/backandless-test-assignment/master/tabs.json');
            console.log(response);
            return response;

        } catch (error) {
            console.error("Error occured" - error);
        }


};

export default GetTabs;
