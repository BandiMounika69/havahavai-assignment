import { Provider, defaultTheme, Grid, View, Heading, Text, Flex, Checkbox, TableView, TableHeader, Column, TableBody, Row, Cell,Button } from '@adobe/react-spectrum';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faHouse,faGrip,faArrowDown,faPlus} from '@fortawesome/free-solid-svg-icons';
import "../Home/home.css"

const Sidebar = ()=>(
    <Flex direction="column" gap="size-200">
                        <Flex direction='column' alignItems="start" gap="10px" UNSAFE_className="nav-item">
                          <Flex gap='size-100'  alignItems='center'>
                          <FontAwesomeIcon icon={faHouse} />
                            <Text>Home</Text>
                          </Flex>
                          <Flex gap='size-100' alignItems='center'>
                            <FontAwesomeIcon icon={faGrip} />
                            <Text>Dashboard</Text>
                          </Flex>
                          
                          
                          </Flex>
                        <Flex alignItems='start' direction='column' gap='10px'>
                            <Heading level={3} UNSAFE_className="section-heading">Services</Heading>
                            <Text>Airports</Text>
                            <Text >Videos</Text>
                        </Flex>
                        <Flex alignItems='start' direction='column' gap='10px'>
                            <Heading level={3} UNSAFE_className="section-heading">Others</Heading>
                            <Text>List 1</Text>
                            <Text>List 2</Text>
                            <Text>List 3</Text>
                        </Flex>
                        
                        
                    </Flex>
)

export default Sidebar