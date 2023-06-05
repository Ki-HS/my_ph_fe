import React, { useState } from "react";
import Footer from "../../Public/Footer/Footer.js";
import Header from "../../Public/Header/Header.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { testCP } from "../../../../_actions/cp_action.js";

export default function TestPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [itemSeq, setItemSeq] = useState("");
    const [ResponseState, setResponse] = useState(false);

    const onAlert = (e) => {
        alert("hello");
    };

    const onItemSeqHandler = (e) => {
        setItemSeq(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!itemSeq) return alert("gggg");

        dispatch(testCP(itemSeq)).then((response) => {
            alert(response.payload.body.items[0].atpnQesitm);

            if (response.payload.isSuccess) {
                navigate("/");
            }
        });
    };

    return (
        <>
            <Header />
            <div className="content" style={{ margin: "0 auto", width: "400px" }}>
                <div style={{ margin: "0 auto", width: "400px" }}>
                    <form id="frmIdLogin" target="_top" autoComplete="on" method="GET" onSubmit={onSubmitHandler}>
                        <ul className="panel_wrap">
                            <li className="panel_item">
                                <div className="panel_inner" role="tabpanel" aria-controls="loginid">
                                    <div className="id_pw_wrap">
                                        <div className="input_row" id="itemSeq_line">
                                            <input
                                                type="text"
                                                id="itemSeq"
                                                name="itemSeq"
                                                placeholder="itemSeq"
                                                value={itemSeq}
                                                onChange={onItemSeqHandler}
                                                title="itemSeq"
                                                className="input_text"
                                                maxLength="20"
                                            />
                                        </div>
                                        <div className="btn_login_wrap">
                                            <button type="submit" className="btn_login" id="log.login">
                                                <span className="btn_text">가입완료</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
