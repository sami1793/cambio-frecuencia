// import {
//   Flex,
//   Input as InputChakra,
//   TableContainer,
//   Table,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
// } from "@chakra-ui/react";
// import React from "react";

// export const InputMSS3GSection = ({ dataMSS }) => {
//   if (dataMSS) {
//     let tableMSS3G = [];
//     tableMSS3G = dataMSS.filter(
//       (row, rowIndex) => rowIndex === 2 || rowIndex === 3
//     );
//     console.log("table", tableMSS3G);
//   }
//   return (
//     <Flex direction="column" gap={5} mb={5}>
//       <TableContainer>
//         <Table size="sm" bgColor="gray.100" p={3} borderRadius="md">
//           <Thead bgColor="gray.300">
//             <Tr>
//               <Th>NAME</Th>
//               <Th>NO</Th>
//               <Th>LAC</Th>
//               <Th>SAC</Th>
//               <Th>RZ</Th>
//               <Th>CA</Th>
//               <Th>MCC</Th>
//               <Th>MNC</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {dataMSS &&
//               dataMSS.map((row, rowIndex) => (
//                 <Tr key={rowIndex}>
//                   <Td>
//                     <InputChakra maxW="120px" value={row[2]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="80px" value={row[3]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="80px" value={row[5]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="80px" value={row[7]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="70px" value={row[8]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="80px" value={row[13]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="70px" value={row[15]} />
//                   </Td>
//                   <Td>
//                     <InputChakra maxW="70px" value={row[16]} />
//                   </Td>
//                 </Tr>
//               ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Flex>
//   );
// };
