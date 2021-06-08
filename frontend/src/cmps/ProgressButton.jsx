import React from 'react'


export function ProgressButton({ status }) {
    // console.log('stat stat status', status);
    // console.log('order in preview', order);



    const handleProgress = () => {
        
        // console.log('in progressss yesssss');
    }


    return (
        <button onClick={handleProgress}>
            {(status === 'new') && <>
              Accept
            </>
            }

            {(status === 'pending') && <>
                Done
            </>
            }
              {(status === 'done') && <>
                Deliver
            </>
            }

        </button>
    )
}