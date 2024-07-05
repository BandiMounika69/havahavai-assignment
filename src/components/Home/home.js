import React from 'react';
import { Provider, defaultTheme, Grid, View, Heading, Text, Flex, Checkbox, TableView, TableHeader, Column, TableBody, Row, Cell,Button } from '@adobe/react-spectrum';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowDown,faPlus} from '@fortawesome/free-solid-svg-icons';
import Headbar from '../headBar/Headbar';
import Sidebar from '../sidebar/sidebar';
import {Link} from "react-router-dom"

const HomeComponent = () => {
  const airports = [
    {id:'IGIA', name: 'Indra Gandhi International Airport', country: 'India',Code:'DEL',Terminals:3 },
    {id:'DIA', name: 'Dubai International Airport', country: 'UAE',Code:'DXB',Terminals:3 },
    {id:'HA' ,name: 'Heathrow Airport', country: 'England',Code:'LMR',Terminals:3 },
    {id:'IA', name: 'Istanbul Airport', country: 'Turkey',Code:'IST',Terminals:3 },
    {id:'RGIA', name: 'Rajiv Gandhi International Airport', country: 'DFW',Code:'DEL',Terminals:3 },
  ];

  return (
    <Provider theme={defaultTheme}>
            <Grid
                areas={[
                    'header  header',
                    'sidebar content',
                    'sidebar  content'
                ]}
                columns={['size-3000', 'auto']}
                rows={['auto']}

                height="100vh"
                >
                <View UNSAFE_className='topnavcontainer' height='12vh'   gridArea="header" >
                    <Headbar/>
                    
                </View>
                <View gridArea="sidebar" backgroundColor="gray-200" padding="size-200" UNSAFE_className="sidebar">
                    <Sidebar/>
                </View>
              <View height='90vh' gridArea="content" padding="size-200" UNSAFE_className="content">
                <Flex alignItems='center' margin={'size-100'} justifyContent={'space-between'}>
                  <Heading level={1} UNSAFE_className="content-heading">Airports</Heading>
                  <Button UNSAFE_className='addbuttonclass' variant="primary" staticColor="black" style="fill">
                    <FontAwesomeIcon icon={faPlus} />
                    <Text marginStart={'size-100'}>ADD</Text>
                  </Button>
                </Flex>
                <TableView 

                     aria-label="Airports Table" width={1170}>
                  <TableHeader   >
                    <Column width={800} align="start">
                      <Flex gap={'size-100'} alignItems='center'>
                        <Checkbox aria-label="Select All Airports" />
                        See all Airports
                        <FontAwesomeIcon icon={faArrowDown} />
                      </Flex>
                      
                     </Column>
                    
                    <Column  width={120} align="start">Country</Column>
                    <Column width={120} align="start" >Code</Column>
                    <Column width={120} align="start">Terminals</Column>
                  </TableHeader>
                  <TableBody >
                    {airports.map((airport, index) => (
                      <Row  key={index}>
                        <Cell>
                          <Link className='linkele' to={`details/${airport.id}`}>
                            <Flex gap={'size-100'} alignItems='center'>
                              <Checkbox aria-label={`Select ${airport.name}`} />
                              {airport.name}
                            </Flex>
                          </Link>
                        
                        </Cell>
                        
                        <Cell >{airport.country}</Cell>
                        <Cell >a</Cell>
                        <Cell >b</Cell>
                      </Row>
                      
                    ))}
                  </TableBody>
            </TableView>
          </View>
                
                </Grid>
    </Provider>
  );
}

export default HomeComponent;

