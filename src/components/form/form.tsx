import React from "react";

import "./form.css"

interface Props {
    method?: string;
}

export default function Form(props: Props) {
    return (
<>
    <form className="form bg-black border-2 border-solid border-black dark:border-white" method={props?.method||"get"}>
        <input className="border-2 border-solid border-black" type="text" name="content" id="content" />
        <input type="submit" value="OK" />
    </form>
</>
    );
} 