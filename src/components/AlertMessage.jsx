import React, { useState } from 'react'

function AlertMessage({ textMessage }) {


    return (
        <>

            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 my-1 rounded relative" role="alert">

                <span class="block sm:inline">{textMessage}</span>
                
            </div>
        </>
    )
}

export default AlertMessage