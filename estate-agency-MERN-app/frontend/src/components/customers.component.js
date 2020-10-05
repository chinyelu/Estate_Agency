import React, { Component } from 'react'
import axios from 'axios'
const apiServerURL = "http://localhost:5000/"

export default class CustomersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get(apiServerURL + 'customers/').then(res => {
            this.setState({
                customers: res.data
            })
            console.log("component did mount all customers: " + res.data)
        }).catch(err => {
            console.log("component error: " + err)
        })
    }

    deleteCustomer = (customerId) => {
        axios.delete(apiServerURL + "customers/" + customerId).then((res) => {
            console.log('delete func: ' + res)
            // window.location = '/'
            this.setState({
                customers: this.state.customers.filter((elem) => {
                    return elem._id !== customerId
                })
            })
        }).catch(err => {
            console.log(err)
        })

    }

    getCustomerList = () => {
        const customers = this.state.customers
        return (
            customers.map(elem => {
                return (
                    <tr key={elem._id}>
                        <td>{elem.customer_name}</td>
                        <td>{elem._id} <a href='#' onClick={() => { this.deleteCustomer(elem._id) }}>delete</a></td>
                    </tr>
                )
            })
        )
    }


    render() {
        return (
            <div>
                <h3>Customers</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>ID</td>
                        </tr>
                    </thead>
                    <tbody >
                        {this.getCustomerList()}
                    </tbody>
                </table>
                <button type="button" className="btn btn-success" onClick={() => { alert("create new customer") }}>Create a Customer</button>
            </div>
        )
    }
}