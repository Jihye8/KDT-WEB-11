import React from 'react'

export default function InfoList(list) {
    console.log(list)
    return (
        <div>
        {list.map((info=>{
            <div></div>
        }))}
        </div>
    )
}
