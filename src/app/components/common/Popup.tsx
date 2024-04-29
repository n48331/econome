"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const AddTask = ({ isModalOpen, setIsModalOpen,title ,formData, setFormData,handleAddTransaction}: any) => {

   

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData((prevFormData:any) => ({
            ...prevFormData,
            [name]: value,
            type: title,
        }));
    };

    const addTask = () => {

        if (formData.name === "" || formData.amount === 0) {
            alert("Please fill all the fields");
            return;
        }else{
            handleAddTransaction();
        }
        setIsModalOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div className="z-20">

            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div style={{backgroundColor: title=='Income' ? '#b1d1d8': '#efdac7'}} className="mt-5 bg-white rounded-lg shadow p-5 w-3/4 relative">
                    <span onClick={closeModal} className=" absolute right-1 top-1 text-[35px]"><IoClose/></span>
                        <h2 className="font-bold py-3">Add {title}</h2>
                        <form className="flex flex-col gap-2">
                            <input
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="text"
                                name="name"
                                placeholder={`${title} description`}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                           
                          
                           
                            <input
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="date"
                                name="dueDate"
                                placeholder="Task Due Date"
                                value={formData.date}
                                onChange={handleInputChange}
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                            <input
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="number"
                                name="amount"
                                placeholder="Amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                            />

                            <button onClick={addTask} type="button" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                    <g>
                                        <rect fill="none" height="24" width="24"></rect>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span className="pl-2 mx-1">Add {title}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTask;

