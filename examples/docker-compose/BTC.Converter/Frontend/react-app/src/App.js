import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(27, 129, 165);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;

  >small {
    font-weight: lighter;
    font-size: .5em;
  }
`

const Error = styled.p`
  color: #aa0a0a;
  background: white;
  padding: .5rem 5rem;
  margin-top: 5em;
  border-radius: 2px;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  >* {
    margin: 1rem;
    color: white;
    font-size: 2.5rem;
  }

  input[type='number']::-webkit-inner-spin-button, 
  input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }

  >input[type="number"] {
    width: 3em;
    border: 0;
    background: transparent;
    border-bottom: white solid 2px;
    text-align: center;
  }

  >input[type="submit"] {
    font-size: 1.5rem;
    padding: .5em 1em;
    background: white;
    color: black;
    border: 0;
    border-radius: 2px;
  }

  >p {
    font-weight: bold;
  }
`

class App extends Component {

  constructor() {
    super()
    this.state = ({ btc: 0, eur: 0, error: undefined })
  }

  convert = (event) => {
    fetch(`http://localhost:8081/convert/btc/${this.state.btc}`)
      .then(result => result.json())
      .then(value => this.setState({ ...this.state, eur: value.toFixed(2), error: undefined }))
      .catch(error => this.setState({ ...this.state, error: error.message }))
    event.preventDefault()
  }

  btcUpdated = (event) =>
    this.setState({ btc: event.target.value, eur: 0 })


  render() {
    return (
      <Wrapper>
        <Title>BTC <small>TO</small> EUR</Title>
        <Form onSubmit={this.convert}>
          <input type="number" value={this.state.btc} onChange={this.btcUpdated}></input>
          <input type="submit" value="CONVERT"></input>
          <p>{this.state.eur} €</p>
        </Form>
        {this.state.error ? <Error>{this.state.error}</Error> : null}
      </Wrapper>
    );
  }
}

export default App;
