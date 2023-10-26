import * as ip from "ip-address";

function binarioADecimal(binario) {
  while (binario.length < 32) {
    binario = binario + "0";
  }
  // Divide la cadena binaria en 4 partes de 8 bits cada una
  const partes = binario.match(/.{1,8}/g);

  // Convierte cada parte binaria a decimal y las une con puntos
  const direccionDecimal = partes.map((part) => parseInt(part, 2)).join(".");

  return direccionDecimal;
}
export const calculateNetwork = (ipAddress, subnetMask) => {
  const ipAddr = new ip.Address4(ipAddress);
  const networkAddress = binarioADecimal(ipAddr.mask(subnetMask));
  return networkAddress;
};
