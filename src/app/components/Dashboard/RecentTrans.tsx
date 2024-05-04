import Link from "next/link";

const RecentTrans = ({ data,limit ,title}: any) => {
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl leading-none text-gray-900 dark:text-white">{title}</h5>
                   {title === 'Recent transactions' ?
                   <Link href="/transactions" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                    </Link>: null}
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data?.slice(0, limit)?.map((item: any, index: any) => (
                        <li className="py-3 sm:py-4" key={index}>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={ item.name === 'deposit'? '/deposit.png' : '/transfer.png'} alt="Profile" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {new Date(item.date).toLocaleDateString('en-GB')}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold" style={{ color: item.name === 'deposit' ? '#5cd65c' : '#d65c5c' }}>
                                    {item.name === 'deposit' ? '₹' : '-₹'}{Number(item.amount)}
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
