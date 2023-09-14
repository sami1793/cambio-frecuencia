import { Box, Center, Flex, Input, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import readXlsxFile from "read-excel-file";
import { Title } from "../components/titles/Title";
import { BoxComands } from "../components/box/BoxComands";
import { Comand } from "../components/comand/Comand";

export const Creation2G = () => {
  const [data2G, setData2G] = useState("");
  const pais = {
    ARG: {
      MCC: "722",
      MNC: "310",
    },
    PY: {
      MCC: "744",
      MNC: "02",
    },
    UY: {
      MCC: "748",
      MNC: "10",
    },
  };
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        // console.log(arrayData.filter((value, index) => index >= 0));
        setData2G(
          arrayData.filter(
            (value, index) => index <= 28 && index >= 2 && value[9]
          )
        );
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };
  return (
    <Center mt={5}>
      <Flex direction="column" alignItems="center">
        <Title title={`Crecimiento 2G`}></Title>
        <Box>
          <Input type="file" onChange={handleFileUpload} maxW="max" />
        </Box>
        {/* *******COMANDOS************ */}
        {data2G && (
          <Wrap>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <BoxComands title="Creación de BTS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQC:BCF=${value[13]},BTS=${value[14]},NAME=${
                        value[1]
                      },SEG=${value[14]},SEGNAME=${value[1]}:CI=${
                        value[10]
                      },BAND=${value[7]}:NCC=${value[26]},BCC=${
                        value[27]
                      }:MCC=${pais[value[174]]["MCC"]},MNC=${
                        pais[value[174]]["MNC"]
                      },LAC=${value[24]}:HOP=RF,HSN1=${value[69]},HSN2=${
                        value[70]
                      }:GENA=Y,RAC=${value[25]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="Modificación de Hopping">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQE:BTS=${value[14]},AHOP=Y;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="Habilitar en las BTS diversidades">
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
                <BoxComands title="Modificación de MEAS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQB:BTS=${value[14]}:MEAS=N;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="Habilito en las BTS number of multiframes, timer for periodic MS LOCATION UPDATING">
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
                      comand={`ZEQG:BTS=${value[14]}:HYS=6,RXP=${value[150]},RLT=${value[147]},GRXP=${value[151]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>

                {/* ****** FREC DE MAL************ */}
                <BoxComands title="MAL: CREAR MAL Y AGREGAR FRECUENCIA">
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
                                                        ? `&${value[131]}${
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
                </BoxComands>
                <BoxComands title="ASOCIAR MAL A BTS">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEQA:BTS=${value[14]}:MAL=${value[73]},MO=${value[74]},MS=${value[76]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
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
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
