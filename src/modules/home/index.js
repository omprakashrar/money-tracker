import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";

const Container  = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
align-items: center;
margin: 30px 0 10px;
width: 360px;
`;

const HomeComponent = (props) => {
    const [transactions, updateTransaction] = useState([]);
    const [expance, updateExpance] = useState(0);
    const [income, updateIncome] = useState(0);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };
    const calculateBalence = () => {
        let exp = 0;
        let  inc = 0;
        transactions.forEach((payload) => {
            payload.type==="EXPANCE"
            ? (exp = exp+payload.amount) 
            : (inc = inc+payload.amount)
        });
        updateExpance(exp);
        updateIncome(inc);
    };

    useEffect(() => calculateBalence(), [transactions]); // eslint-disable-line react-hooks/exhaustive-deps


    return(
        <Container>
           
            <OverviewComponent
             addTransaction = {addTransaction}
             expance={expance}
             income={income}
             />
            <TransactionComponent transactions ={transactions} />
        </Container>
    )
}

export default HomeComponent;