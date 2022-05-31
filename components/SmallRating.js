import {useState} from "react";
import {Rating} from "@mui/material";

function SmallRating() {
    const [value, setValue] = useState(1)

    return (
        <div className="flex items-center self-center mt-2">
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
}

export default SmallRating;
