import { useLoaderData, useParams, useNavigation } from "react-router-dom";
import { DummyList } from "./tabs/dummyList";
import { DummyTable } from "./tabs/dummyTable";
import { DummyChart } from "./tabs/dummyChart";

const Dummy = () => {
    const { id } = useParams();
    const {state} = useNavigation();

    console.log(id);
    console.log(state);

    return (
        <div>AAAA</div>
    )
}

export default Dummy;