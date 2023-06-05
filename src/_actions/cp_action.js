import axios from "axios";
import { COMBINATION_PROHIBIT_TEST } from "./action_type";

export async function testCP(param) {
    const request = await axios
        .get("http://localhost:5000/app/cp/test", { params: { keyword: param } })
        .then((response) => response.data);
    return {
        type: COMBINATION_PROHIBIT_TEST,
        payload: request,
    };
}
