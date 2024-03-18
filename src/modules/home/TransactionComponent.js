import { useEffect, useState } from "react";
import styled from "styled-components";

const Container  = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
align-items: flex-start;
padding: 10px 22px;
font-size: 18px;
width: 100%;
gap:10px;
font-weight: bold;
 & input{ 
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid #e6e8e9;
    background: #e6e8e9;
    outline: none;
    width: 100%;
}
`;
const Cell = styled.div`
display: flex;
flex-direction: row;
padding: 10px 15px;
font-size: 14px;
border-radius: 2px;
align-items: center;
font-weight: normal;
justify-content: space-between;
width: 100%;
border: 1px solid #e6e8e9;
border-right: 4px solid ${(props) => (props.isExpence ? "red" : "green")}
`;

const TransactionCell  = (props) => {
    return(
        <Cell isExpence={props.payload?.type === "EXPANCE"}>
            <span>{props.payload.desc}</span>
            <span>${props.payload.amount}</span>
        </Cell>
    );
};

const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updatetxn] = useState(props.transactions);
   const filterData =  () => {
    if(!searchText || !searchText.trim().length) {
        updatetxn(props.transactions);
        return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) => payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updatetxn(txn);

   };

   useEffect(() => filterData(searchText), [props.transactions]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <Container>
            Transactions
            <input placeholder="Search"
             value={searchText}
             onChange={(e)=> {updateSearchText(e.target.value)
            filterData(e.target.value);
        }}
             />
            {filteredTransaction?.length? 
            filteredTransaction.map((payload) => (
            <TransactionCell payload = {payload}/>))
            : "" }
        </Container>
    )
}

export default TransactionComponent;