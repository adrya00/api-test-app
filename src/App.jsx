import React, { useState, useEffect} from 'react';
import axios from 'axios'

const URL = 'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=1092422'

const Table = () => {
  const [interactions, setInteractions] = useState([])

  useEffect(() => {
    getInteractions()
  }, [])

  const getInteractions = async () => {
    const response = await axios.get(URL)
    setInteractions(response.data)
  }

const renderHeader = () => {
  let headerElement = ['Name', 'Severity', 'Description', 'URL']

  return headerElement.map((key, index) => {
  return <th key={index}>{key.toUpperCase()}</th>
  })
}

const renderBody = () => {
  
  return interactions && interactions.map(({item, index}) => { 
    
    return (  
          
      <tr key={index.rxcui}>
        <td>{item.rxcui}</td>
        <td>{item.name}</td>
        <td>{item.tty}</td>        
      </tr>
    )
  })
}

return(
  <>
  <h1 id='title'> Drug Interaction Table</h1>
  <table id='interaction'>
    <thread> 
      <tr>{renderHeader()}</tr>
    </thread>
      <tbody>
        {renderBody()}
      </tbody>    
  </table>
  </>
)
}

export default Table