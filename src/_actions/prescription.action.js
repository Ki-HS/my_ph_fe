import axios from "axios";
import { PRESCRIPTION_TEST } from "./action_type";

export async function testPrescription() {
    const request = await axios.get("http://localhost:5000/app/prescription/").then((response) => response.data);
    return {
        type: PRESCRIPTION_TEST,
        payload: request,
    };
}
