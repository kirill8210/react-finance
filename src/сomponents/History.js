import React from "react"
import HistoryItem from './Historyitem'

const History = ({ transactions }) => {
    return (
        <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
                  {transactions.map(item =>
                    <HistoryItem
                        transaction={item}
                        key={item.id}
                    /> )}
            </ul>
        </section>
    )
}

export default History;