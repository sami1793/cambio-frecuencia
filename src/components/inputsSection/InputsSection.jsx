import { Input } from "../input/Input";
import { Input as InputChakra } from "@chakra-ui/react";

import "./InputsSection.css";

export const InputsSection = ({ inputs, handleChange }) => {
  return (
    <div className="inputContainer">
      <div className="inputsSection">
        <Input labelName="BCF">
          <InputChakra
            type="number"
            name="bcf"
            value={inputs.bcf}
            onChange={handleChange}
          />
        </Input>
        <Input labelName="BTS">
          <InputChakra
            type="number"
            name="bts"
            value={inputs.bts}
            onChange={handleChange}
          />
        </Input>

        <Input labelName="TRX">
          <InputChakra
            type="number"
            name="trx"
            value={inputs.trx}
            onChange={handleChange}
          />
        </Input>
      </div>
      <div className="inputsSection">
        <Input labelName="FREQ">
          <InputChakra
            type="number"
            name="freq"
            value={inputs.freq}
            onChange={handleChange}
          />
        </Input>
        <Input labelName="MAL">
          <InputChakra
            type="number"
            name="mal"
            value={inputs.mal}
            onChange={handleChange}
          />
        </Input>
        <Input labelName="NEW FREQ">
          <InputChakra
            type="number"
            name="newFreq"
            value={inputs.newFreq}
            onChange={handleChange}
          />
        </Input>
      </div>
    </div>
  );
};
