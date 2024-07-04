import { useState } from 'react';
import Barchart from './Barchart';
import './Status.scss'
// function Status() {
//     const [year, setYear] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Submitted year:', year);
//     };

//     return (
//         <div className='flex flex-col items-center gap-16 '>
//             <div className='items-start flex flex-col gap-1 cursor-pointer relative'>
//                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
//                             Year-wise placement statistics
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="year"
//                             type="text"
//                             placeholder="Enter year"
//                             value={year}
//                             onChange={(e) => setYear(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             type="submit"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//                 <Barchart chartdata={year} />
//             </div>

//         </div>
//     )
// }

// function Status() {
//     const [aditi, setAditi] = useState('');
//     const [year, setYear] = useState('0');
//     let data = year;
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         // console.log('Submitted year:', year);
//         setYear(aditi);
//         data = year;
//     };


//     return (
//         <div className='flex flex-col items-center gap-16 bg-white p-0 m-auto'>
//             <div className='items-start flex flex-col  cursor-pointer '>
//                 <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
//                             Year-wise placement statistics
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="year"
//                             type="text"
//                             placeholder="Enter year"
//                             value={aditi}
//                             onChange={(e) => setAditi(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             type="submit"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>

//                 <Barchart chartdata={data} />

//             </div>

//         </div>
//     )
// }
function Status() {
    const [year, setYear] = useState('');
    const [submittedYear, setSubmittedYear] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedYear(year);
    };

    return (
        <div className='flex flex-col items-center gap-16  p-4 md:p-8 Status' id='services2'>
            <div className='w-full md:w-3/4 lg:w-1/2 shadow-md rounded-lg p-6 statuswrapper'>
                <form onSubmit={handleSubmit} className="statusform">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                        Year-wise placement statistics
                    </label>
                    <div className="flex">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                            id="year"
                            type="text"
                            placeholder="Enter year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {submittedYear && <Barchart chartdata={submittedYear} />}
            </div>
        </div>
    )
}

export default Status;
