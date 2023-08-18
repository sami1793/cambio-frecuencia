import { Box, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Comand } from "../comand/Comand";

export const ComandTRXDeleteSection = ({ values }) => {
  return (
    // <Flex direction="column" gap={3}>
    <Wrap>
      <WrapItem>
        <Box bg="blue.800" p={2}>
          <Heading color="white" size="sm" mb={3}>
            BLOQUEAR TRX
          </Heading>
          <Comand
            comand={`ZERS:BTS=${values.trx1},TRX=1;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx2},TRX=2;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx3},TRX=3;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx4},TRX=4;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx5},TRX=5;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx6},TRX=6;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx7},TRX=7;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx8},TRX=8;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx9},TRX=9;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx10},TRX=10;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx11},TRX=11;L;`}
            task=""
            color="orange.200"
          />
          <Comand
            comand={`ZERS:BTS=${values.trx12},TRX=12;L;`}
            task=""
            color="orange.200"
          />
        </Box>
      </WrapItem>
      <WrapItem>
        <Box bg="blue.800" p={2}>
          <Heading color="white" size="sm" mb={3}>
            BORRAR TRX
          </Heading>
          <Comand
            comand={`ZERD:BTS=${values.trx1},TRX=1;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx2},TRX=2;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx3},TRX=3;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx4},TRX=4;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx5},TRX=5;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx6},TRX=6;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx7},TRX=7;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx8},TRX=8;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx9},TRX=9;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx10},TRX=10;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx11},TRX=11;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZERD:BTS=${values.trx12},TRX=12;`}
            task=""
            color="red.200"
          />
        </Box>
      </WrapItem>
      <WrapItem>
        <Box bg="blue.800" p={2}>
          <Heading color="white" size="sm" mb={3}>
            BORRAR D-CHANNEL
          </Heading>
          <Comand comand={`ZDWD=${values.dch1};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch2};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch3};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch4};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch5};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch6};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch7};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch8};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch9};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch10};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch11};`} task="" color="red.200" />
          <Comand comand={`ZDWD=${values.dch12};`} task="" color="red.200" />
        </Box>
      </WrapItem>
      <WrapItem>
        <Box bg="blue.800" p={2}>
          <Heading color="white" size="sm" mb={3}>
            BORRAR SEÑALIZACION TRX
          </Heading>
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX1;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX2;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX3;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX4;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX5;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX6;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX7;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX8;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX9;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX10;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX11;`}
            task=""
            color="red.200"
          />
          <Comand
            comand={`ZOYY:IUA:BCF${values.bcf}TRX12;`}
            task=""
            color="red.200"
          />
        </Box>
      </WrapItem>
      {/* </Flex> */}
    </Wrap>
  );
};
