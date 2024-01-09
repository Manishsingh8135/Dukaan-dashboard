import React from 'react';
import SearchBar from './Searchbar';
import TransactionsTable from './TransectionTable';
import transactionsData from '../../data/transectionData';

const TransactionsSection: React.FC = () => {
  return (
    <div className=" mx-6 rounded-md p-6 bg-white">
      <h1 className="text-2xl  mb-4 text-black">Transactions | This Month</h1>
      <SearchBar />
      <TransactionsTable transactions={transactionsData} />
    </div>
  );
};

export default TransactionsSection;
