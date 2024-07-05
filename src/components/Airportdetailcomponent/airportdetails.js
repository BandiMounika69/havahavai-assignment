import React from 'react';
import { Provider, defaultTheme, View, Header, Content, Footer, Flex, Text } from '@adobe/react-spectrum';

function Airportdetails() {
  return (
    <Provider theme={defaultTheme}>
      <View height="100vh" width="100vw">
        <Header>
          <View padding="size-200" backgroundColor="gray-900">
            <Text color="white">Header</Text>
          </View>
        </Header>
        <Flex direction="row" height="calc(100vh - 100px)">
          <View width="25%" backgroundColor="gray-300">
            <Text>Left Sidebar</Text>
          </View>
          <Flex direction="column" width="75%">
            <Content flex>
              <View padding="size-200" backgroundColor="gray-100">
                <Text>Main Content Area</Text>
              </View>
            </Content>
            <Footer>
              <View padding="size-200" backgroundColor="gray-900">
                <Text color="white">Footer</Text>
              </View>
            </Footer>
          </Flex>
        </Flex>
      </View>
    </Provider>
  );
}

export default Airportdetails;