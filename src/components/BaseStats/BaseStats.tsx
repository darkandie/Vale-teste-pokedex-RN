import React from 'react';
import { Box, VStack, Text, Center, HStack, View } from 'native-base';

interface BaseStatsProps {
  stats?: Array<
    {base_stat: number, effort: number, stat: {name: string, url: string}}
  >;
}

const BaseStats = ({stats}: BaseStatsProps): JSX.Element => {
  return (
    <Box>
      <Center>
        <Text mt={5} bold color={"green.500"}>Base Stats</Text>
      </Center>  
      <Box mt={5}>
        {stats?.map((status) => {
          return (
            <Box key={status.stat.name} paddingX={5}>
              <HStack>
                <Box width="1/4" borderRightColor={"muted.300"} borderRightWidth={1}>
                  <VStack  alignItems="flex-start">
                    <Text 
                      bold 
                      color={"green.500"}
                    >{status.stat.name.toUpperCase().substring(0, 7)}</Text>
                  </VStack>
                </Box>
                <Box marginLeft={5}>
                  <VStack>
                    <HStack alignItems="center">
                      <VStack width="6">
                        <Text>{status.base_stat}</Text>
                      </VStack>
                      <VStack width="full" alignItems="flex-start" >
                        <View borderRadius={8} marginLeft={4} height={1} width="60%" backgroundColor={"#22c55e"}/>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
            </Box>  
          )
        })}
      </Box>
    </Box>
  )
}

export default BaseStats;