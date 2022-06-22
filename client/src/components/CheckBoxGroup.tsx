import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function CheckBoxGroup({ list, handleChange }: { list: string[], handleChange: (e:any, checked:boolean)=> void }) {
  

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        {list.map((cat) => (
          <FormControlLabel
            key={cat}
            value={cat}
            control={<Checkbox />}
            label={cat}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
