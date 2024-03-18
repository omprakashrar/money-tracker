import { useState } from "react";
import styled from "styled-components";



const Container  = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
align-items: center;
margin: 10px;
width: 100%;
`;

const BalanceBox = styled.div`
display: flex;
flex-direction: row;
font-weight:bold;
font-size: 18px;
width: 110%;
align-items: center;
text-align: center;
justify-content: space-between;

`;

const AddTransaction = styled.div`
background: black;
color: white;
padding: 5px 10px;

border-radius:4px;
cursor: pointer;
font-weight:bold;
font-size: 15px;
margin: 0 auto;
`;

const AddTransactionContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #e6e8e9;
gap: 10px;
width: 100%;
padding: 15px 20px;
margin: 20px;
 & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
}
`;
const RadioBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
text-align: center;
&input {
    width: unset;
    margin: 0 10px;
}

`;

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPANCE");

    const addTransaction = ()=> {
        props.addTransaction({
        amount: Number(amount),
        desc,
        type,
        id: Date.now(),
        });
        props.toggleAddTxn();
    }

    return(
        <AddTransactionContainer>
            <input placeholder="Amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}/>
            
            <input placeholder="Description" value={desc}
            onChange={(e) => setDesc(e.target.value)}/>
            <RadioBox>
                <input type="radio" 
                id="expance"
                name="type" 
                value="EXPANCE"
                checked={type==="EXPANCE"}
                onChange={(e) => setType(e.target.value)}
                  />
                <label htmlFor="expance">Expance</label>
                <input
                 type="radio"
                 id="income"
                 name="type" 
                 value="INCOME"
                 checked={type==="INCOME"}
                 onChange={(e) => setType(e.target.value)}
                  />
                <label htmlFor="expance">Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>

        </AddTransactionContainer>
    );

};
     

const ExpanceContainer = styled.div`
display:flex;
flex-direction: row;
gap: 12px;
margin: 20px;
`;

const ExpanceBox = styled.div`
display:flex;
flex-direction: column;
border-radius: 4px;
border: 1px solid #e6e8e9;
padding: 15px 20px;
width: 135px;
text-align: center;
font-size: 17px;
& span{
    font-weight: bold;
    font-size: 17px;
    color: 	${(props) => (props.isIncome ? "green" : "red")};
}
`;




const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    return(
        <Container>
           <BalanceBox>
            Balance: ${props.income - props.expance}
            <AddTransaction onClick ={()=> toggleAddTxn(!isAddTxnVisible)}>
                {isAddTxnVisible ? "Cancel" : "ADD"}
                </AddTransaction>
           </BalanceBox>
           {isAddTxnVisible && <AddTransactionView 
           toggleAddTxn={toggleAddTxn} 
           addTransaction = {props.addTransaction}
           />}
           <ExpanceContainer>
            <ExpanceBox isIncome={false}>
                Expance<span>${props.expance}</span>
            </ExpanceBox>
            <ExpanceBox isIncome={true}>
            Income<span>${props.income}</span>
            </ExpanceBox>
           </ExpanceContainer>

        </Container>
    )
}

export default OverviewComponent;