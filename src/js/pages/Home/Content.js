import React from "react"

const listText = "Distinctively seize accurate imperatives for multimedia based action items. Uniquely grow best-of-breed."

export default class Content extends React.Component {

    getListBundle(arr) {
        return arr.map((arr) => {
            return  <div className="wrap--list" key={arr}>
                <div className="wrap--list-icon">
                    <img src="images/icon--list.png" alt=""/>
                </div>
                <p>{ listText }</p>
            </div>
        })
    }

    render() {
        return(
            <div className="home--content">
                <div className="wrap--img--content">
                    <img src="images/phones.png" alt=""/>
                </div>
                <div className="home--content__info">
                    <h2>Features</h2>
                    { this.getListBundle([1 ,2, 3, 4]) }
                </div>
            </div>
        )
    }
}
