

const RecentTrans = ({data}:any) => {
    return (
       

<div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl  leading-none text-gray-900 dark:text-white">Recent transactions</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
           {data?.map((item:any, index:any) => (
             <li className="py-3 sm:py-4" key={index}>
             <div className="flex items-center">
                 <div className="flex-shrink-0">
                     <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                 </div>
                 <div className="flex-1 min-w-0 ms-4">
                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                         {item.name}
                     </p>
                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                         {item.user}
                     </p>
                 </div>
                 <div className="inline-flex items-center text-base font-semibold" style={{ color: item.type === 'Expense' ? '#d65c5c' : '#5cd65c' }}>
                {item.type === 'Expense' ? '-₹' : '₹'}{Number(item.amount)}
                 </div>
             </div>
         </li>
           ))}
           
          
         
        </ul>
   </div>
</div>

    );
}

export default RecentTrans;