// types/Transaction.ts

export type Transaction = {
    orderId: string;
    orderDate: string;
    orderAmount: string;
    transactionFees: string;
  };
  
  export type TransactionsData = Transaction[];
  