import React from 'react';
import { Transaction } from '../../types/Transection';

const TransactionsTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {

  return (
    <div className=" overflow-x-hidden  rounded-md border-gray-200 ">
      <table className="min-w-full ">
        <thead className="bg-[#F2F2F2]">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-s font-medium text-gray-500  ">
              Order ID
            </th>
            <th scope="col" className="px-6 py-4 text-center text-s font-medium text-gray-500  ">
              Order date
            </th>
            <th scope="col" className="px-6 py-4 text-right text-s font-medium text-gray-500  ">
              Order amount
            </th>
            <th scope="col" className="px-6 py-4 text-right text-s font-medium text-gray-500  ">
              Transaction fees
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.orderId}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#126EB4]">{transaction.orderId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 ">{transaction.orderDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{transaction.orderAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{transaction.transactionFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
