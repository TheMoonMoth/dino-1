import React from "react"
import "./App.css"
import { Header } from "./Header.js"
import { Listings } from "./Section.js"
import { Form } from "./Form.js"
import { Footer } from "./Footer.js"


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.updateData = this.updateData.bind(this)
  }

  componentDidMount() {
    fetch("./listings.json")
      .then(resp => resp.json())
      .then(resp => this.setState({ data: resp }))
  }

  updateData(data) {
    let newData = this.state.data
    newData.unshift(data)
    return this.setState({data:newData})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Listings listings={this.state.data} />
          <Form updateData={this.updateData} />
        </main>
        <Footer/>
      </div>
    )
  }
}
