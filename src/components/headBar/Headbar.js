import { Avatar,Provider, defaultTheme, Grid, View, Heading, Text, Flex, Checkbox, TableView, TableHeader, Column, TableBody, Row, Cell,Button } from '@adobe/react-spectrum';
import "../Home/home.css"
const Headbar = ()=>(
    <Flex alignItems={'center'} UNSAFE_className='containerheading' padding-left= "20px">
        <Heading  justifySelf='start'  level={1} UNSAFE_className="logo">hava havai</Heading>
        <Avatar size={'40px'} justifySelf='right' src="https://res.cloudinary.com/dcwxu3d5g/image/upload/v1720157905/havahavai/Avatar_-_Desktop_-_Light_1_piuftp.png" alt="avatar" className='imageclass'/>
        
    </Flex>
)

export default Headbar