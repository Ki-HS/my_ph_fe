import axios from "axios";
import { MEDICINE_TEST } from "./action_type";

export async function testMedicine(param) {
    const request = await axios
        .get("http://localhost:5000/app/medicine/test", { params: { keyword: param } })
        .then((response) => response.data);
    return {
        type: MEDICINE_TEST,
        payload: request,
    };
}
