import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Input,
  Select,
  Stack,
  Tooltip,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import { Title } from "../components/titles/Title";
import { ButtonLinkPrimary } from "../components/buttonSection/ButtonLinkPrimary";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BoxComands } from "../components/box/BoxComands";
import { RiLockPasswordLine } from "react-icons/ri";
import { Comand } from "../components/comand/Comand";
import { useState } from "react";
import readXlsxFile from "read-excel-file";

export const MSS2G = () => {
  const initialData2GMSSConection = {
    user: "",
    mss: "",
  };
  const [data2GMSSConection, setData2GMSSConection] = useState(
    initialData2GMSSConection
  );
  const [data2GMSS, setData2GMSS] = useState("");
  const handleChange = (e) => {
    setData2GMSSConection({
      ...data2GMSSConection,
      [e.target.name]: e.target.value,
    });
  };
  const toast = useToast();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        console.log(
          arrayData.filter((value, index) => index >= 2 && value[14])
        );
        setData2GMSS(
          arrayData.filter((value, index) => index >= 2 && value[14])
        );
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };
  const copyCredencials = () => {
    navigator.clipboard.writeText(
      `ssh -p 4422 "CTIMOVIL\\${data2GMSSConection.user.toLocaleUpperCase()}@BOIR01@${
        data2GMSSConection.mss
      }@pbps.claro.amx"`
    );
    toast({
      title: "Comando listo para usar en PowerShell",
      description: "",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };
  return (
    <Center mb={10}>
      <Flex direction="column" alignItems="center" gap={3}>
        <Title title="Crecimiento MSS 2G"></Title>
        <Flex direction="column" alignItems="center" gap={3}>
          <h3>
            <b>Cargar RF Sheet:</b>
          </h3>
          <Input type="file" onChange={handleFileUpload} maxW="max" />
        </Flex>
        <ButtonLinkPrimary
          name="Check MSS"
          href="https://doxplanning.com/metabase/public/dashboard/f9b71ea3-a2fd-4791-ac6d-d225fa7bddbc"
          icon={<ExternalLinkIcon mx="5px" />}
        ></ButtonLinkPrimary>

        <BoxComands title={`Conectar a MSS`}>
          <Flex gap={3} w="full" justifyContent="center" bg="gray.200" p={2}>
            <Input
              bg="white"
              placeholder="Escriba su exa.."
              w="fit-content"
              name="user"
              value={data2GMSSConection.user}
              onChange={handleChange}
            />
            <Select
              bg="white"
              placeholder="Seleccionar MSS"
              w="fit-content"
              name="mss"
              value={data2GMSSConection.mss}
              onChange={handleChange}
            >
              <option value="MSSASU02">MSSASU02</option>
              <option value="MSSASU03">MSSASU03</option>
              <option value="MSSBAH03">MSSBAH03</option>
              <option value="MSSBAR02">MSSBAR02</option>
              <option value="MSSCOR04">MSSCOR04</option>
              <option value="MSSCOR05">MSSCOR05</option>
              {/* <option value="option2">MSSCOR06</option> */}
              <option value="MSSCRR03">MSSCRR03</option>
              <option value="MSSGRA02">MSSGRA02</option>
              <option value="MSSJON03">MSSJON03</option>
              <option value="MSSM1PYASU1">MSSM1PYASU1</option>
              <option value="MSSM1PYOLL2">MSSM1PYOLL2</option>
              <option value="MSSM1ARCOR1">MSSM1ARCOR1</option>
              <option value="MSSM1AROLL2">MSSM1AROLL2</option>
              {/* <option value="option3">MSSM01ARCOR1</option> */}
              {/* <option value="option3">MSSM01AROLL2</option> */}
              <option value="MSSM2ARCOR2">MSSM2ARCOR2</option>
              <option value="MSSM2AROLL1">MSSM2AROLL1</option>
              <option value="MSSM3ARCOR1">MSSM3ARCOR1</option>
              <option value="MSSM3AROLL1">MSSM3AROLL1</option>
              <option value="MSSMAR03">MSSMAR03</option>
              <option value="MSSMEN03">MSSMEN03</option>
              <option value="MSSMON04">MSSMON04</option>
              <option value="MSSMON05">MSSMON05</option>
              <option value="MSSNEU03">MSSNEU03</option>
              <option value="MSSOLL01">MSSOLL01</option>
              {/* <option value="option3">MSSOLL02</option> */}
              <option value="MSSROS04">MSSROS04</option>
              <option value="MSSROS05">MSSROS05</option>
              <option value="MSSSAN03">MSSSAN03</option>
              <option value="MSSTOR03">MSSTOR03</option>
              <option value="MSSTUC03">MSSTUC03</option>
            </Select>
            <Tooltip label="Obtener comando PowerShell">
              <IconButton
                icon={<RiLockPasswordLine />}
                onClick={copyCredencials}
                variant="solid"
                bgGradient="linear(to-r, teal.600, teal.500)"
                border="2px"
                color="white"
                _hover={{
                  bgGradient: "linear(to-l, teal.600, teal.500)",
                  color: "white",
                }}
              />
            </Tooltip>
          </Flex>
        </BoxComands>

        {/* <InputMSS3GSection dataMSS={dataMSS} /> */}
        {data2GMSS && (
          <Wrap>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <BoxComands title={`CRECER MSS`}>
                  {data2GMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPC:NAME=${value[226]},NO=${value[173]},TYPE=BTS:LAC=${value[24]},CI=${value[173]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title={`ASIGNO BSC`}>
                  {data2GMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPB:NO=${value[173]}:BSCNAME=${value[11]};`}
                      task=""
                      color="green.100"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title={`ASIGNO RZ`}>
                  {data2GMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPR:NO=${value[173]}:RZ=${
                        value[171]
                      },CA=${136};`}
                      task=""
                      color="green.100"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title={`DESBLOQUEAR`}>
                  {data2GMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPS:NO=${value[173]}:U;`}
                      task=""
                      color="blue.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
              </Flex>
            </WrapItem>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton p={2}>
                        <Box as="span" flex="1" textAlign="center">
                          VERIFICAR POR NAME
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex direction="column" gap={3}>
                        <BoxComands title={`VERIFICAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPO:TYPE=BTS,NAME=${value[226]};`}
                              task=""
                              color="yellow.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                        <BoxComands title={`BLOQUEAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPS:TYPE=BTS,NAME=${value[226]}:L;`}
                              task=""
                              color="blue.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                        <BoxComands title={`BORRAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPD:TYPE=BTS,NAME=${value[226]};`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton p={2}>
                        <Box as="span" flex="1" textAlign="center">
                          VERIFICAR POR NO
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex direction="column" gap={3}>
                        <BoxComands title={`VERIFICAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPO:TYPE=BTS,NO=${value[173]};`}
                              task=""
                              color="yellow.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                        <BoxComands title={`BLOQUEAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPS:TYPE=BTS,NO=${value[173]}:L;`}
                              task=""
                              color="blue.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                        <BoxComands title={`BORRAR`}>
                          {data2GMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPD:TYPE=BTS,NO=${value[173]};`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </BoxComands>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
