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
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
