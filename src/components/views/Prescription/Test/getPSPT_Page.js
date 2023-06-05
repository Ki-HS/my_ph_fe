import React, { useState } from "react";
import axios from "axios";

import Footer from "../../Public/Footer/Footer.js";
import Header from "../../Public/Header/Header.js";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { testPrescription } from "../../../../_actions/prescription.action.js";

export default function TestPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");

    dispatch(testPrescription()).then((response) => {
        alert(response.payload.a);
        setA(response.payload.a);
        setB(response.payload.b);
        setC(response.payload.c);

        console.log(response);
        if (response.payload.isSuccess) {
            navigate("/");
        }
    });

    // dispatch(testPrescription(itemSeq)).then((response) => {
    //     alert(response.payload.body);

    //     if (response.payload.isSuccess) {
    //         navigate("/");
    //     }
    // });

    return (
        <>
            <Header />
            <div className="content" style={{ margin: "0 auto", width: "400px" }}>
                <List
                    sx={{ margin: "20px auto", width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader style={{ fontWeight: "bold", fontSize: 14 }} component="div" id="nested-list-subheader">
                            회원 정보
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary={a} />
                    </ListItemButton>
                </List>
            </div>
        </>
    );
}
