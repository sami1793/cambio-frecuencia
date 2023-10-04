import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
  WrapItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import readXlsxFile from "read-excel-file";
import { Title } from "../components/titles/Title";
import { BoxComands } from "../components/box/BoxComands";
import { Comand } from "../components/comand/Comand";
import { toEXA } from "../utils/conversor";
import { BSCConection } from "../components/2G/BSCConection";

export const Creation2G = () => {
  let contTRX = 0;
  const MCC = {
    AR: "722",
    PY: "744",
    UY: "748",
  };
  const MNC = {
    AR: "310",
    PY: "02",
    UY: "10",
  };
  const getMCC = (pais) => {
    return MCC[`${pais}`];
  };
  const getMNC = (pais) => {
    return MNC[`${pais}`];
  };

  const [data2G, setData2G] = useState("");
  const [dataDF2GSheet1, setDataDF2GSheet1] = useState("");
  const [dataDF2GSheet2, setDataDF2GSheet2] = useState("");
  const [dataDF2GSheet3, setDataDF2GSheet3] = useState("");
  const [dataDF2GSheet4, setDataDF2GSheet4] = useState("");
  const [dataDF2GSheet5, setDataDF2GSheet5] = useState("");

  const [IPOMUTRX, setIPOMUTRX] = useState([]);

  const [inputOMUTRXID, setInputOMUTRXID] = useState({
    bcsu1: "1",
    bcsu2: "1",
    bcsu3: "1",
    bcsu4: "1",
    bcsu5: "1",
    bcsu6: "1",
    bcsu7: "1",
  });

  const setInputsBSCU = (numberInput, bscu) => {
    setInputOMUTRXID({
      ...inputOMUTRXID,
      [bscu]: numberInput,
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        // console.log(arrayData.filter((value, index) => index >= 0));
        setData2G(
          arrayData.filter(
            (value, index) => index <= 26 && index >= 2 && value[0]
          )
        );
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };

  const getIPOMUTRX = (sheet) => {
    console.log(
      sheet.filter((value, index) => index > 8 && index < 20 && value[1])
    );
    setIPOMUTRX(
      sheet.filter((value, index) => index > 8 && index < 20 && value[1])
    );
  };

  const handleFileDF2GUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayDataBCSUIP = await readXlsxFile(file, { sheet: "BCSU_IP" });
        const arrayDataBTSIP = await readXlsxFile(file, { sheet: "@BTS_IP" });
        const arrayDataAbisBCF = await readXlsxFile(file, {
          sheet: "Abis BCF",
        });
        const arrayDataPacketAbis = await readXlsxFile(file, {
          sheet: "PacketAbis_LAPD_links",
        });
        const AbisSCTP = await readXlsxFile(file, { sheet: "Abis SCTP" });

        setDataDF2GSheet1(arrayDataBCSUIP);
        setDataDF2GSheet2(arrayDataBTSIP);
        setDataDF2GSheet3(arrayDataAbisBCF);
        setDataDF2GSheet4(arrayDataPacketAbis);
        setDataDF2GSheet5(AbisSCTP);
        console.log(arrayDataBCSUIP);
        getIPOMUTRX(arrayDataBCSUIP);
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };

  return (
    <Center mt={5}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Title title={`Crecimiento 2G`}></Title>
        {dataDF2GSheet1 && data2G && (
          <Heading
            mb={3}
            as="h3"
            size="lg"
            color="teal.600"
            bgColor={"whiteAlpha.900"}
            p={2}
            borderRadius="lg"
          >
            {data2G[0][0]}
          </Heading>
        )}

        <Flex gap={3}>
          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar RF Sheet</FormLabel>
            <Input
              type="file"
              onChange={handleFileUpload}
              maxW="max"
              color="gray.800"
              bgColor="gray.100"
            />
          </FormControl>

          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar DF</FormLabel>
            <Input
              type="file"
              onChange={handleFileDF2GUpload}
              maxW="max"
              bgColor="gray.100"
              color="gray.800"
            />
          </FormControl>
        </Flex>
        <BSCConection />
        {/* *******COMANDOS DF*********** */}
        {dataDF2GSheet1 && data2G && (
          <VStack>
            <HStack gap={3} m={10}>
              <TableContainer bgColor={"gray.200"}>
                <Table
                  size="sm"
                  variant="striped"
                  colorScheme="teal"
                  borderRadius="3xl"
                  borderWidth={2}
                  borderColor={"teal.700"}
                >
                  <Thead>
                    <Tr>
                      <Th>BCSU</Th>
                      <Th isNumeric>N° BCSU</Th>
                      <Th>OMUSIG</Th>
                      <Th>TRXSIG</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {IPOMUTRX.map((value, indexMap) => (
                      <Tr key={indexMap}>
                        <Td>{value[1]}</Td>
                        <Td>
                          <NumberInput
                            defaultValue={indexMap}
                            name={`bcsu${indexMap + 1}`}
                            min={0}
                            max={8}
                            width="100px"
                            bgColor="whiteAlpha.500"
                            onChange={(numberInput) =>
                              setInputsBSCU(numberInput, `bscu${indexMap + 1}`)
                            }
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </Td>
                        <Td> {value[4]}</Td>
                        <Td>{value[5]}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Comand
                  comand={`${dataDF2GSheet1[10][8]}`}
                  task="VERIFICAR IP DE OMUSIG"
                  color="yellow.200"
                />
                <Comand
                  comand={`${dataDF2GSheet1[11][8]}`}
                  task="VERIFICAR IP DE TRXSIG"
                  color="yellow.200"
                />
              </TableContainer>
              <TableContainer bgColor={"gray.200"}>
                <Table
                  size="sm"
                  variant="striped"
                  colorScheme="teal"
                  borderRadius="3xl"
                  borderWidth={2}
                  borderColor={"teal.700"}
                >
                  <Thead>
                    <Tr>
                      <Th>ETME</Th>
                      <Th isNumeric>ETME-ID</Th>
                      <Th>IP</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dataDF2GSheet1
                      .filter((_, index) => index >= 20 && index < 24)
                      .map((value, indexMap) => (
                        <Tr key={indexMap}>
                          <Td>{value[1]}</Td>
                          <Td>
                            <NumberInput
                              defaultValue={1}
                              min={0}
                              max={4}
                              width="100px"
                              bgColor="whiteAlpha.500"
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </Td>
                          <Td> {value[4]}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
                <Comand
                  comand={`${dataDF2GSheet1[28][1]}`}
                  task="VERIFICAR IP DE ETME"
                  color="yellow.200"
                />
              </TableContainer>
            </HStack>

            <Tabs variant="line" colorScheme="whiteAlpha">
              <TabList bgColor="whiteAlpha.300" color="white">
                <Tab>Crecimiento</Tab>
                <Tab>Verificar</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <BoxComands title="CREACION DE SEÑALIZACIÓN DE BCF"></BoxComands>
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        )}
        {/* // dataDF2GSheet1.map((value, indexMap) => <Text>{value[4]}</Text>) */}
        {/* *******COMANDOS RFSHEET************ */}
        {data2G && dataDF2GSheet1 && (
          <Wrap>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <BoxComands title="CREACION DE BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Borrar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQC:BCF=${value[13]},BTS=${
                              value[14]
                            },NAME=${value[1]},SEG=${value[14]},SEGNAME=${
                              value[1]
                            }:CI=${value[10]},BAND=${value[7]}:NCC=${
                              value[26]
                            },BCC=${value[27]}:MCC=${getMCC(
                              value[174]
                            )},MNC=${getMNC(value[174])},LAC=${
                              value[24]
                            }:HOP=RF,HSN1=${value[69]},HSN2=${
                              value[70]
                            }:GENA=Y,RAC=${value[25]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEEI:BTS=${value[14]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQD:BTS=${value[14]}:Y;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="MODIFICACION DE HOPPING">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQE:BTS=${value[14]},AHOP=Y;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQO:BTS=${value[14]}:HOP:;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS DIVERSIDADES TRX PRIORITY IN TCH ALLOCATION, DTX MODE, MS TXPWR MIN, MAX NUMBER OF RETRANSMISSION, NUMBER OF SLOTS SPREAD TRANS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQM:BTS=${value[14]}:CB=Y,RDIV=${
                        value[144] == 1 ? "Y" : "N"
                      },TRP=${value[57]},DTX=1,PMIN=14,RET=2,SLO=16,FRL=${
                        value[77]
                      },FRU=${value[78]},STIRC=${
                        value[145] == 1 ? "Y" : "N"
                      },:::QSRI=7,QSRP=7;
                      `}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                    //VER PMIN que en 850 es 13 y aca 14!!!!!!!!!
                  ))}
                </BoxComands>
                <BoxComands title="MODIFICACION DE MEAS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQB:BTS=${value[14]}:MEAS=N;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS NUMBER OF MULTIFRAMES, TIMER FOR PERIODIC MS LOCATION UPDATING">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQJ:BTS=${value[14]}:MFR=4,PER=6.0;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS PLMN PERMITTED, DIRECTED RETRY USED, CALL RE-ESTABLISHMENT ALLOWED, DIRECTED RETRY METHOD, MIN TIME LIMIT DIRECTED RETRY, MAX TIME LIMIT DIRECTED RETRY">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQF:BTS=${value[14]}:PLMN=0&&7,DR=Y,RE=Y,DRM=1,MIDR=2,MADR=7;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS CELL RESELECT HYSTERESIS, RXLEV ACCESS MIN, RADIO LINK TIMEOUT">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQG:BTS=${value[14]}:HYS=6,RXP=${value[150]},RLT=${value[147]},GRXP=${value[151]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS MAX QUEUE LENGTH, TIME LIMIT CALL, TIME LIMIT HANDOVER, QUEUEING PRIORITY CALL, QUEUEING PRIORITY URGENT HANDOVER, QUEUEING PRIORITY NON-URGENT HANDOVER">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQH:BTS=${value[14]}:MQL=25,TLC=7,TLH=2,QPC=9,QPH=8,QPN=10;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>

                {/* ****** FREC DE MAL************ */}
                <BoxComands title="MAL: CREAR MAL Y AGREGAR FRECUENCIA">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBE:MAL,${value[73]},${value[7]}:FREQ=${
                              value[125]
                            }${
                              value[126]
                                ? `&${value[126]}${
                                    value[127]
                                      ? `&${value[127]}${
                                          value[128]
                                            ? `&${value[128]}${
                                                value[129]
                                                  ? `&${value[129]}${
                                                      value[130]
                                                        ? `&${value[130]}${
                                                            value[131]
                                                              ? `&${
                                                                  value[131]
                                                                }${
                                                                  value[132]
                                                                    ? `&${
                                                                        value[132]
                                                                      }${
                                                                        value[133]
                                                                          ? `&${
                                                                              value[133]
                                                                            }${
                                                                              value[134]
                                                                                ? `&${value[134]}`
                                                                                : ""
                                                                            }`
                                                                          : ""
                                                                      }`
                                                                    : ""
                                                                }`
                                                              : ""
                                                          }`
                                                        : ""
                                                    }`
                                                  : ""
                                              }`
                                            : ""
                                        }`
                                      : ""
                                  }`
                                : ""
                            };`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBI:MAL,${value[73]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="ASOCIAR MAL A BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Agregar o Eliminar frecuencias</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQA:BTS=${value[14]}:MAL=${value[73]},MO=${value[74]},MS=${value[76]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQO:BTS=${value[14]}:HOP;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBT:MAL,${value[73]},A:FREQ=${
                              value[125]
                            }${
                              value[126]
                                ? `&${value[126]}${
                                    value[127]
                                      ? `&${value[127]}${
                                          value[128]
                                            ? `&${value[128]}${
                                                value[129]
                                                  ? `&${value[129]}${
                                                      value[130]
                                                        ? `&${value[130]}${
                                                            value[131]
                                                              ? `&${
                                                                  value[131]
                                                                }${
                                                                  value[132]
                                                                    ? `&${
                                                                        value[132]
                                                                      }${
                                                                        value[133]
                                                                          ? `&${
                                                                              value[133]
                                                                            }${
                                                                              value[134]
                                                                                ? `&${value[134]}`
                                                                                : ""
                                                                            }`
                                                                          : ""
                                                                      }`
                                                                    : ""
                                                                }`
                                                              : ""
                                                          }`
                                                        : ""
                                                    }`
                                                  : ""
                                              }`
                                            : ""
                                        }`
                                      : ""
                                  }`
                                : ""
                            };`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>

                  {/* ****REVISAR MO!! PORQUE LE PUSE 74 Y NO 75******* */}
                </BoxComands>
                <BoxComands title="HABILITO LOS CODEC AMR HR A NIVEL DE BTS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQY:BTS=${value[14]}:ARLT=${value[147]},HRC=1&4&16;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS POWER CONTROL">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUC:BTS=${value[14]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS HANDOVER CONTROL">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHC:BTS=${value[14]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="MODIFICACIONES DE HANDOVER CONTROL">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHG:BTS=${value[14]}:EFA=Y,EFP=Y,EFH=Y,HPP=4,HPU=4;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="MODIFICACIONES DE HOC">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`
                      ZEHN:BTS=${value[14]}:QSRC=${value[156]},WCP=${
                        value[157]
                      },LTSC=${value[158]},UMIU=${value[159]},IDE=${
                        value[160] ? "Y" : "N"
                      },FDMR=${value[161]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHA:BTS=${value[14]}:LDW=2,LUW=2,QDW=2,QUW=2;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHQ:BTS=${value[14]}:QDR=5,QUR=5;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHS:BTS=${value[14]}:LDR=-91,LUR=-101;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHI:BTS=${value[14]}:IDR=-76,IUR=-86;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`
                      ZEHD:BTS=${value[14]}:MSWS=20,MSP=10,MSN=16;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="MODIFICACIONES DE POWER CONTROL">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUG:BTS=${value[14]}:PENA=Y,PMAX2=${value[162]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUG:BTS=${value[14]}:PMAX1=${value[163]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUA:BTS=${value[14]}:LDW=2,LUW=2,QDW=2,QUW=2;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUQ:BTS=${value[14]}:UDP=4,UDN=4,UUP=4,UUN=4;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUS:BTS=${value[14]}:UDR=-68,UUR=-78,LDR=-80,LUR=-90;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS DEDICATED GPRS CAPACITY, DEFAULT GPRS CAPACITY, MAX GPRS CAPACITY, PREFER BCCH FREQUENCY GPRS, GPRS ENABLED, EGPRS ENABLED, INITIAL MCS FOR UNACKNOWLEDGED MODE, MAXIMUM BLER IN ACKNOWLEDGED MODE, MAXIMUM BLER IN UNACKNOWLEDGED MODE, MEAN BEP OFFSET GMSK, MEAN BEP OFFSET 8PSK">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQV:BTS=${value[14]}:CDED=${value[55]},CDEF=${
                        value[54]
                      },CMAX=${value[53]},BFG=${value[56]},GENA=N,EGENA=${
                        value[56] ? "Y" : "N"
                      },MCU=6,BLA=${value[85]},BLU=${value[86]},MBG=0,MBP=0;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="PARÁMETROS GPRS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQV:BTS=${value[14]}:DLA=${value[79]},DLBH=${value[80]},ULBH=${value[83]},DLB=${value[81]},ULA=${value[82]},MCA=${value[137]},MCU=${value[138]},ULB=${value[84]},BLA=${value[85]},BLU=${value[86]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="PARÁMETROS POC">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`
                      ZEUM:BTS=${value[14]}:ALPHA=${value[87]},GAMMA=${value[88]},BEP=${value[89]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>

                {/* *******TRX********** */}
                <BoxComands title="CREACIÓN DE TRX">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Borrar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERC:BTS=${
                                    value[14]
                                  },TRX=${contTRX}:PREF=${
                                    index == 0 ? "P" : "N"
                                  },GTRX=${
                                    value[29 + index * 2] ? "Y" : "N"
                                  },:FREQ=${value[28 + index * 2]},TSC=${
                                    value[27]
                                  },:DNAME=${
                                    "T" + toEXA(Number(value[13])) + contTRX
                                  }:CH0=${index == 0 ? "MBCCH" : "TCHD"},CH1=${
                                    index == 0 ? "SDCCB" : "TCHD"
                                  };`}
                                  task=""
                                  color="green.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                      <TabPanel>
                        <Comand
                          comand={`ZEEI:BCF=${data2G[0][13]};`}
                          task=""
                          color="yellow.200"
                        />
                      </TabPanel>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERD:BTS=${value[14]},TRX=${contTRX};`}
                                  task=""
                                  color="red.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="MODIFICACION DE TCH DE TRX (DUAL RATE - SDCCH - TCHD) POSIBILITANDO TAMBIEN CAMBIO DE FRECUENCIA">
                  {!!(contTRX = 0)}
                  {data2G.map((value, indexMap) =>
                    Array(value[6])
                      .fill()
                      .map((_, index) => {
                        contTRX++;
                        return (
                          <Comand
                            comand={`ZERM:BTS=${
                              value[14]
                            },TRX=${contTRX}:HRS=Y,FREQ=${
                              value[28 + index * 2]
                            },${
                              index == 0
                                ? "CH0=MBCCH,CH1=SDCCB,CH2=CCCHE,CH3=SDCCH,CH4=TCHD,CH5=TCHD,CH6=TCHD,CH7=TCHD"
                                : "CH0=TCHD,CH1=TCHD,CH2=TCHD,CH3=TCHD,CH4=TCHD,CH5=TCHD,CH6=TCHD,CH7=TCHD"
                            };`}
                            task=""
                            color="green.200"
                            key={index}
                          />
                        );
                      })
                  )}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS GPRS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Habilitar</Tab>
                      <Tab>Deshabilitar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQV:BTS=${value[14]}:GENA=Y, EGENA=Y;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQV:BTS=${value[14]}:GENA=N, EGENA=N;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR TRX">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Bloquear</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERS:BTS=${value[14]},TRX=${contTRX}:U;`}
                                  task=""
                                  color="green.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERS:BTS=${value[14]},TRX=${contTRX}:L;`}
                                  task=""
                                  color="red.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Bloquear</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQS:BTS=${value[14]}:U;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQS:BTS=${value[14]}:L;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
