
import React,{ useEffect, useState } from 'react';
import {Link} from "react-router-dom"

import {ActionButton,DialogTrigger,ButtonGroup,Content,Dialog,Switch,FileTrigger,ComboBox,Form,TextField, Divider,Tabs,Breadcrumbs,TabList,Item,TabPanels, Provider, defaultTheme, Grid, View, Heading, Text, Flex, Checkbox, TableView, TableHeader, Column, TableBody, Row, Cell,Button } from '@adobe/react-spectrum';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faEllipsis,faArrowUpFromBracket,faHouse,faGrip,faArrowDown,faPlus} from '@fortawesome/free-solid-svg-icons';
import Headbar from '../headBar/Headbar';
import Sidebar from '../sidebar/sidebar';
import '../Home/home.css'
import "./details.css"

const Details = () => {
    const {id} = useParams()
    console.log(id)
    const airports = [
        {id:'IGIA', name: 'Indra Gandhi International Airport', country: 'India',Code:'DEL',Terminals:3 },
        {id:'DIA', name: 'Dubai International Airport', country: 'UAE',Code:'DXB',Terminals:3 },
        {id:'HA' ,name: 'Heathrow Airport', country: 'England',Code:'LMR',Terminals:3 },
        {id:'IA', name: 'Istanbul Airport', country: 'Turkey',Code:'IST',Terminals:3 },
        {id:'RGIA', name: 'Rajiv Gandhi International Airport', country: 'DFW',Code:'DEL',Terminals:3 },
      ];
    
    const filtered = airports.filter((each)=>each.id===id)

    const airportDetail = filtered[0]
    
    
    
    




  const terminaltab = ()=>{
    
    return(
        <>
            <Flex direction={'column'} >
                <Flex UNSAFE_className='terminaltabconatiner'>

                
                <Flex  UNSAFE_className='terminalcard'>
                    <img src="https://res.cloudinary.com/dcwxu3d5g/image/upload/v1720166064/havahavai/Imagecradimage_qmqmwh.png" alt="terminalcard"/>
                    <Flex UNSAFE_className='terminalCardRightCont' width={'100%'} alignItems={'start'} padding={'30px'} justifyContent={'start'} direction={'column'}>
                        <Flex height={'40%'}  justifyContent={'space-between'} width={'70%'}>
                            <Text gap={'size-100'}>Terminal 1</Text>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </Flex>

                        <Text UNSAFE_className='textterminalcard' >Optional metadata should be two lines.</Text>
                    </Flex>
                    
                </Flex>
                <Flex  marginStart={'10px'}  UNSAFE_className='terminalcard'>
                    <img src="https://res.cloudinary.com/dcwxu3d5g/image/upload/v1720166064/havahavai/Imagecradimage_qmqmwh.png" alt="terminalcard"/>
                    <Flex UNSAFE_className='terminalCardRightCont' width={'100%'} alignItems={'start'} padding={'30px'} justifyContent={'start'} direction={'column'}>
                        <Flex height={'40%'}  justifyContent={'space-between'} width={'70%'}>
                            <Text gap={'size-100'}>Terminal 1</Text>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </Flex>

                        <Text UNSAFE_className='textterminalcard' >Optional metadata should be two lines.</Text>
                    </Flex>
                    
                </Flex> 
                <DialogTrigger   >
                    <ActionButton UNSAFE_className='actionbutoon' marginStart={'30px'} alignSelf={'center'} variant="primary" >
                                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                        <Text marginStart={'10px'}>Add Terminal</Text>
                                   </ActionButton>
                    {(close) => (
                        <Dialog width={'400px'}>
                            
                            <Heading><input placeholder='Terminal title' className='inputcontiner' type="text"/></Heading>
    
                            <Divider />
                           
                            <Content><input placeholder='Description' type="text" className='inputcontinerdesc' /></Content>
                            <ButtonGroup>
                                <Flex width={'100%'} justifyContent={'space-between'}>
                                    <FileTrigger allowsMultiple>
                                        <Button   variant="primary">
                                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                            <Text marginStart={'10px'}>Upload</Text>
                                        </Button>
                                    </FileTrigger>
                                    <Flex>
                                    <Button variant="secondary" onPress={close}>Cancel</Button>
                                    <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
                                    </Flex>
                                    
                                </Flex>
                                
                            </ButtonGroup>
                        </Dialog>
                    )}
                    </DialogTrigger>
                
                </Flex>
                <Heading alignSelf={'start'} level={2}>Services</Heading>
                 <Text marginBottom={'10px'} alignSelf={'start'}>lost & found</Text>
                 <Divider size="M" />
                 <Form validationBehavior="native" >
                    <Flex justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <TextField value='lost & found' label="service name" name="email" type="email" isRequired />
                        <ComboBox  value="option 1" label="category" >
                            <Item key="one">option 1</Item>
                            <Item key="two">option 2</Item>
                            <Item key="three">option 3</Item>
                        </ComboBox>
                        <ComboBox value="option 4" label="sub category" > 
                            <Item key="four">option 4</Item>
                            <Item key="five">option 5</Item>
                            <Item key="six">option 6</Item>
                        </ComboBox>
                        <Flex marginTop={'23px'} alignItems={'center'} width={'40%'} justifyContent={'space-between'}>
                            <View>
                                <FileTrigger allowsMultiple>
                                    <Button   variant="primary">
                                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                        <Text marginStart={'10px'}>Upload</Text>
                                    </Button>
                                </FileTrigger>
                                <Switch marginStart={'15px'}>Show image</Switch>
                            </View>
                            <Button UNSAFE_className='addbuttonclass' variant="primary" staticColor="black" style="fill">
                                Save
                            </Button>
                            
                        </Flex>
                        
                    </Flex>
                    <Flex marginTop={'30px'}  alignSelf={'start'}>
                        <TextField width={'400px'} placeholder='type here' name="description" alignSelf={'start'} value="type here"  label="Description"  type="description"  />
                    </Flex>
                    <Flex marginTop={'50px'} alignItems={'start'} direction={'column'}>
                        <Text marginTop={'20px'} marginBottom={'20px'}>Lounge</Text>
                        <Divider size='M'/>
                        <Text  marginBottom={'20px'}>Money Exchange</Text>
                        <Divider size='M'/>
                    </Flex>
                    
                    
                    

                </Form>
            </Flex>
            
            
        </>
            
        
    )
  }

  


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
                <View UNSAFE_className='topnavcontainer' height='8vh'   gridArea="header" >
                    <Headbar/>
                    
                </View>
                <View width={'900px'} gridArea="sidebar" backgroundColor="gray-200" padding="size-200" UNSAFE_className="sidebar">
                    <Sidebar/>
                </View>
              <View   height='95vh' gridArea="content" padding="size-200" UNSAFE_className="content contentcontainer">
                
                <Flex direction={'column'}>
                    <Breadcrumbs>
                        <Item  key="home">
                            <Link className='linkele' to="/">
                             Airports
                            </Link>
                           
                            </Item>
                        <Item key="trendy">{airportDetail.name}</Item>
                    </Breadcrumbs>
                    <Heading alignSelf={'start'} level={1}>{airportDetail.name}</Heading>
                    <Tabs aria-label="History of Ancient Rome">
                        <TabList>
                            <Item key="terminal">Terminals</Item>
                            <Item key="transport">Transport</Item>
                            <Item key="contact">Contact Details</Item>
                        </TabList>
                        <TabPanels>
                            <Item key="terminal">
                                    {terminaltab()}
                            </Item>
                            <Item key="transport">
                                    transport Page
                            </Item>
                            <Item key="contact">
                                    Details page
                            </Item>
                        </TabPanels>
                        </Tabs>
                </Flex>

                
                
          </View>
                
                </Grid>
    </Provider>
  );
}

export default Details;

/*
<View  gridArea="sidebar" backgroundColor="gray-200" padding="size-200" UNSAFE_className="sidebar">
          <Flex direction="column" >
            <Flex alignItems="center" gap="size-100" UNSAFE_className="nav-item">
              <h>h-symbol</h>
              <Text>Home</Text>
            </Flex>
            <Flex alignItems="center" gap="size-100" UNSAFE_className="nav-item">
              <p>dashboardsymbol</p>
              <Text>Dashboard</Text>
            </Flex>
            <Heading level={3} UNSAFE_className="section-heading">Services</Heading>
            <Text>Airports</Text>
            <Text>Videos</Text>
            <Heading level={3} UNSAFE_className="section-heading">Others</Heading>
            <Text>List 1</Text>
            <Text>List 2</Text>
            <Text>List 3</Text>
          </Flex>
        </View>
        <View gridArea="content" padding="size-200" UNSAFE_className="content">
          <Heading level={2} UNSAFE_className="content-heading">Airports</Heading>
          <TableView aria-label="Airports Table">
            <TableHeader>
              <Column>
                <Checkbox aria-label="Select All Airports" />
              </Column>
              <Column>Airport Name</Column>
              <Column>Country</Column>
            </TableHeader>
            <TableBody>
              {airports.map((airport, index) => (
                <Row key={index}>
                  <Cell>
                    <Checkbox aria-label={`Select ${airport.name}`} />
                  </Cell>
                  <Cell>{airport.name}</Cell>
                  <Cell>{airport.country}</Cell>
                </Row>
              ))}
            </TableBody>
          </TableView>
        </View>*/