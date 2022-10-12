import React from "react";
import { LocaleConsumer } from "../../contexts/LocaleContext";

const Loading = () => {
    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <p className="note-loading">
                        {locale === "id" ? "memuat..." : "Loading..."}
                    </p>
                )
            }}
        </LocaleConsumer>
    );
};

export default Loading;