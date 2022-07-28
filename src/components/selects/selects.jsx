import React from "react";
import Selector from "../../UI/select/MySelect";
import { SelectLimitPosts } from "../../UI/selectLimitPosts/selectLimitPosts";

export const Selects = ({onChangeLimit,onChangeSort}) => {
    return(
        <div className="selects">
            <Selector defaultValue="Sort"
                options={[
                    {value:'title', name:'by name'},
                    {value:'body', name:'by description'}
                ]}
                onChangeSort={onChangeSort}/>
            <SelectLimitPosts 
                options={[
                    {value:10, name:10},
                    {value:20, name:20},
                    {value:30, name:30},
                    {value:40, name:40},
                ]} onChangeLimit={onChangeLimit}/>
        </div>
    )
}