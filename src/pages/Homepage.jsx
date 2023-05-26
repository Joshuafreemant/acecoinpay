import React from 'react'
import bg from '../assets/bg.jpg'
import dots from '../assets/dots.svg'
import verify from '../assets/verified-badge.svg'
import masterCard from '../assets/mastercard-2.svg'
import master_card from '../assets/mc_symbol.svg'
import chip from '../assets/chip.png'
import apple from '../assets/apple.svg'
import wifi from '../assets/wifi.png'
import receipt from '../assets/receipt.png'
import { MdModeEdit } from 'react-icons/md';
import { AiFillCreditCard } from 'react-icons/ai';
import CancelButton from '../components/CancelButton'
function Homepage() {
    return (
        <div
            style={{
                background: `url(${bg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center right',
                width: '100%',
                height: '100vh'
            }}
            className='px-48 py-10'
        >
            <div className='bg-white relative p-12 h-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5fr-2fr gap-12'>

                {/* cancel button at the top right */}
                <CancelButton />

                {/* left hand side grid section */}
                <section >
                    <div className='flex justify-between'>
                        <div className="flex items-center gap-2">
                            <span class="rounded-full  flex items-center justify-center p-1 bg-[#035fff]"><AiFillCreditCard className=' text-white' /></span>
                            <h1 className='font-semibold'>AceCoin<span className="font-light">Pay</span></h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold bg-gray-800 text-white text-center p-1 rounded w-6">0</span>
                            <span className="font-semibold bg-gray-800 text-white p-1  text-center rounded w-6">1</span>
                            <span className="font-semibold">:</span>
                            <span className="font-semibold bg-gray-800 text-white p-1 text-center  rounded w-6">1</span>
                            <span className="font-semibold bg-gray-800 text-white p-1  text-center rounded w-6">9</span>
                        </div>
                    </div>

                    {/* Card Number section */}
                    <div className='mt-10 flex justify-between items-center'>
                        <div>
                            <h4 className='font-semibold text-sm'>Card Number</h4>
                            <p className='mt-1 text-xs text-gray-600'>Enter the 16-digit card number on the card</p>
                        </div>

                        <button className='gap-1 flex items-center text-sm text-[#035fff] font-semibold'>
                            <MdModeEdit />
                            Edit
                        </button>
                    </div>


                    {/* Card Number INPUT */}
                    <div className='bg-gray-50 mt-6 mb-8 justify-between border border-gray-200 rounded-md px-4 py-3 flex items-center'>

                        <div className='flex items-center gap-3'>
                            <img src={master_card} alt="" className='w-8' />
                            <div className='flex gap-5'>
                                <input
                                    className='bg-transparent w-[39px] focus:outline-none outline-none'
                                    placeholder={2412}
                                />
                                <span className='text-gray-600'>-</span>
                                <input
                                    className='bg-transparent w-[39px] focus:outline-none outline-none'
                                    placeholder={7512}
                                />
                                <span className='text-gray-600'>-</span>

                                <input
                                    className='bg-transparent w-[39px] focus:outline-none outline-none'
                                    placeholder={3412}
                                />
                                <span className='text-gray-600'>-</span>

                                <input
                                    className='bg-transparent w-[39px] focus:outline-none outline-none'
                                    placeholder={3456}
                                />

                            </div>
                        </div>
                        <img src={verify} alt="" className='w-4' />
                    </div>

                    {/* CVV Number section */}
                    <div className='mt-6 flex justify-between items-center '>
                        <div className='w-1/2'>
                            <h4 className='font-semibold text-sm'>CVV Number</h4>
                            <p className='mt-1 text-xs text-gray-600'>Enter the 3 or 4 digit number on the card</p>
                        </div>

                        <div className='w-1/2 flex-1 border justify-between border-gray-200 rounded-md px-4 py-3 flex items-center'>
                            <input placeholder='327' className='flex-1 text-sm text-center border-none outline-none focus:outline-none ' />
                            <img src={dots} alt="" className='w-4' />
                        </div>
                    </div>


                    {/* Expiry Date section */}
                    <div className='mt-8 flex justify-between items-center  w-full'>
                        <div className='w-1/2'>
                            <h4 className='font-semibold text-sm'>Expiry Date</h4>
                            <p className='mt-1 text-xs text-gray-600'>Enter the expiration date of the card</p>
                        </div>

                        <div className='flex gap-6 w-1/2 items-center'>
                            <input
                                className='focus:outline-[#035fff] focus:text-[#035fff]  text-center w-1/2 border p-2 rounded-md border-gray-200 bg-transparent  focus:outline-none outline-none'
                                placeholder='09'
                            />
                            <span className='text-gray-600'>/</span>
                            <input
                                className='focus:outline-[#035fff] focus:text-[#035fff] text-center w-1/2  border p-2 rounded-md border-gray-200 bg-transparent  focus:outline-none outline-none'
                                placeholder='22'
                            />

                        </div>
                    </div>


                    {/* Password  section */}
                    <div className='mt-8 flex justify-between items-center '>
                        <div className='w-1/2'>
                            <h4 className='font-semibold text-sm'>Password</h4>
                            <p className='mt-1 text-xs text-gray-600'>Enter your Dynamic password</p>
                        </div>

                        <div className='w-1/2 flex-1 border justify-between border-gray-200 rounded-md px-4 py-3 flex items-center'>
                            <input type='password' defaultValue='12345678' placeholder='327' className='flex-1 text-sm  border-none outline-none focus:outline-none ' />
                            <img src={dots} alt="" className='w-4' />
                        </div>
                    </div>

                    {/* pay now button */}
                    <button className='w-full bg-[#035fff] font-semibold rounded-md py-2 text-white mt-8'>
                        Pay Now
                    </button>
                </section>



                {/* right hand side grid section */}
                <section>
                    <div className=' w-full h-full relative overflow-hidden rounded-2xl'>

                        {/* blue transparent filter design */}
                        <span style={{
                            display: 'block',
                            height: '7px',
                            width: '2.5em',
                            backgroundColor: '#035fff',
                            position: 'absolute',
                            top: '6px',
                            left: '50%',
                            transform: 'translate(-50%, 0)'
                        }}></span>

                        {/* ATM CARD design */}
                        <div style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6), #fff)',
                            backdropFilter: 'blur(15px)',
                            padding: '20px',
                            borderRadius: '6px',
                            boxShadow: '0px 1px 14px 1px rgba(224, 224, 224, 0.6)',
                            position: 'relative',
                            zIndex: 99,
                            left: '50%',
                            transform: 'translate(-50%, 0)',
                            overflow: 'hidden',
                            marginTop: 10

                        }}
                            className='w-8/12 h-[270px]'
                        >

                            <span style={{
                                display: 'block',
                                height: '20px',
                                width: '12px',
                                backgroundColor: '#035fff',
                                position: 'absolute',
                                top: '-7px',
                                left: '50%',
                                filter: 'blur(15px)',
                                transform: 'translate(-50%, 0)'
                            }}></span>

                            <div className=''>
                                <div className='w-[300px] h-[300px] border top-12 -left-8 border-gray-100 rounded-full absolute'>

                                </div>
                                <div className='w-[250px] h-[250px] top-28 -left-2 border border-gray-100 rounded-full absolute'>

                                </div>

                                <div className='w-[200px] h-[200px] top-40 left-6 border border-gray-100 rounded-full absolute'>

                                </div>

                                <div className='w-[150px] h-[150px] top-52 left-16 border border-gray-100 rounded-full absolute'>

                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <img src={chip} alt="chip" class="w-7" />
                                <img src={wifi} alt="wifi" class="w-5 h-4" />
                            </div>
                            <div className="mt-24">
                                <span className='text-xs'>Jonathan Micheal</span>
                                <div className='flex items-center gap-4'>
                                    <div className='flex gap-1'>
                                        <div className="w-1 h-1 p-[2px] rounded-full bg-black"></div>
                                        <div className="w-1 h-1 p-[2px] rounded-full bg-black"></div>
                                        <div className="w-1 h-1 p-[2px] rounded-full bg-black"></div>
                                        <div className="w-1 h-1 p-[2px] rounded-full bg-black"></div>
                                    </div>
                                    <span class="visible-digits">3456</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <h5 className='text-sm font-semibold'>09/22</h5>
                                <img src={masterCard} alt="chip" class="w-10" />

                            </div>

                        </div>

                        {/* Order Details design */}
                        <div className='bg-gray-100 h-full w-full px-12 py-4 rounded-2xl  absolute bottom-0 top-16'>
                            <div className='mt-52 px-1 flex flex-col gap-2'>
                                <div className='flex items-center justify-between mt-2'>
                                    <label htmlFor="company" className='text-gray-600 text-[11px] font-medium'>Company</label>
                                    <div className='flex items-center gap-1'>
                                        <img src={apple} alt="apple-icon" className='w-3' />
                                        <h6 className='text-xs font-semibold'>Apple</h6>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <label htmlFor="company" className='text-gray-600 text-[11px] font-medium'>Order Number</label>

                                    <h6 className='text-xs font-semibold'>1266201</h6>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <label htmlFor="company" className='text-gray-600 text-[11px] font-medium'>Product</label>

                                    <h6 className='text-xs font-semibold'>MackBook Air</h6>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <label htmlFor="company" className='text-gray-600 text-[11px] font-medium'>VAT(20%)</label>

                                    <h6 className='text-xs font-semibold'>$100.00</h6>
                                </div>

                                <div className="absolute border-b border-dashed border-gray-300 w-full left-0 right-0 bottom-[150px]">
                                </div>
                                <div className='flex justify-between m-0 absolute -left-3 bottom-[140px]'>
                                    <div className="bg-white w-6 h-6 rounded-full"></div>
                                </div>

                                <div className='flex justify-between m-0 absolute -right-3 bottom-[140px]'>
                                    <div className="bg-white w-6 h-6 rounded-full"></div>
                                </div>

                                <div className="flex items-center justify-between  mt-6">
                                    <div className="">
                                        <p className="text-gray-600 text-[10px]">You have to Pay</p>
                                        <div className="flex ">
                                            <h1 className="font-semibold text-lg">549<span className='text-xs'>.99</span>
                                                <span className='text-gray-600 text-xs font-light ml-1'>USD</span>
                                            </h1>
                                        </div>
                                    </div>
                                    <img src={receipt} alt="" className='w-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Homepage