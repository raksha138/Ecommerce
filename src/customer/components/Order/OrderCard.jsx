import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border shadow-black'>

            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://i5.walmartimages.com/asr/6b3ab1f4-9648-48bc-9298-1ac71f3a1edb.259a22e22dca9d51f955b630a852aaa1.jpeg" 
                        alt="" />

                        <div className='mt-5 space-y-2'>

                            <p className='mb-2'>Men Sweatshirt mid Grey</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Grey</p>

                        </div>

                    </div>



                </Grid>

                <Grid item xs={2}>
                    <p>₹1099</p>

                </Grid>

                <Grid item xs={4}>
                   { true && <div>
                   <p>

                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-500 mr-2'/>
                        <span className='text-semi'>
                            Delivered on March 03
                        </span>
                        
                    </p>
                    <p className='text-xs'>
                        Your Item has been delivered 
                    </p>
                    </div>}
                  
                    { false && <p>
                        
                    <span>
                        Exprected Delivery ON March 13
                    </span>
                    </p>}

                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard