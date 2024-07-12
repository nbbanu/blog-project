import * as React from "react";
import { FormControl } from "@mui/base/FormControl";
import { Autocomplete, Button, Divider, TextField } from "@mui/material";
import { useState } from "react";
import { getAllCategories, getSubcategoryById } from "../../../../service";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function BasicFormControl({ selectedItem }) {
  React.useEffect(() => {
    loadAllCategories();
    loadAllSubcategories();
  }, []);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const loadAllCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  const loadAllSubcategories = async () => {
    let id = selectedItem?.category?.id;
    const data = await getSubcategoryById(id);
    setSubcategories(data);
  };

  return (
    <FormControl>
      {categories?.length > 0 ? (
        <>
          <TextField
            id="outlined-basic"
            label="Başlık"
            variant="outlined"
            sx={{ width: 400, marginTop: 3 }}
            value={selectedItem?.title}
          />
          <Autocomplete
            id="combo-box-demo"
            freeSolo
            options={categories}
            getOptionLabel={(option) => option?.title}
            value={categories?.[0] || null}
            // onChange={}
            sx={{ width: 400, marginTop: 3 }}
            renderInput={(params) => (
              <TextField {...params} label="Ana Kategori" />
            )}
          />
          {subcategories?.length > 0 && (
            <Autocomplete
              freeSolo
              // disablePortal
              id="combo-box-demo"
              options={subcategories}
              getOptionLabel={(option) => option?.title}
              value={subcategories?.[0] || null}
              sx={{ width: 400, marginTop: 3 }}
              renderInput={(params) => (
                <TextField {...params} label="Üst Kategori" />
              )}
            />
          )}

          <Divider style={{ marginTop: 50 }}>
            <Button color="success" variant="contained">
              KAYDET
            </Button>
          </Divider>
        </>
      ) : (
        <Box sx={{ width: 400, marginTop: 1 }}>
          <Skeleton sx={{ marginBottom: 1, height: 80 }} animation="wave" />
          <Skeleton sx={{ marginBottom: 1, height: 80 }} animation="wave" />
          <Skeleton sx={{ marginBottom: 1, height: 80 }} animation="wave" />
          <Skeleton
            sx={{ marginBottom: 1, height: 70, width: 150, margin: "0 auto" }}
            animation="wave"
          />
        </Box>
      )}
    </FormControl>
  );
}

// const StyledInput = styled(Input)(
//   ({ theme }) => `

//   .${inputClasses.input} {
//     width: 400px;
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//     border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${
//       theme.palette.mode === "dark" ? grey[900] : grey[50]
//     };

//     &:hover {
//       border-color: ${blue[400]};
//     }

//     &:focus {
//       outline: 0;
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${
//         theme.palette.mode === "dark" ? blue[600] : blue[200]
//       };
//     }
//   }
// `
// );

// const Label = styled(({ children, className }) => {
//   const formControlContext = useFormControlContext();
//   const [dirty, setDirty] = React.useState(false);

//   React.useEffect(() => {
//     if (formControlContext?.filled) {
//       setDirty(true);
//     }
//   }, [formControlContext]);

//   if (formControlContext === undefined) {
//     return <p>{children}</p>;
//   }

//   const { error, required, filled } = formControlContext;
//   const showRequiredError = dirty && required && !filled;

//   return (
//     <p className={clsx(className, error || showRequiredError ? "invalid" : "")}>
//       {children}
//       {required ? " *" : ""}
//     </p>
//   );
// })`
//   font-family: "IBM Plex Sans", sans-serif;
//   font-size: 0.875rem;
//   margin-top: 14px;

//   &.invalid {
//     color: red;
//   }
// `;

// const HelperText = styled((props) => {
//   const formControlContext = useFormControlContext();
//   const [dirty, setDirty] = React.useState(false);

//   React.useEffect(() => {
//     if (formControlContext?.filled) {
//       setDirty(true);
//     }
//   }, [formControlContext]);

//   if (formControlContext === undefined) {
//     return null;
//   }

//   const { required, filled } = formControlContext;
//   const showRequiredError = dirty && required && !filled;

//   return showRequiredError ? <p {...props}>This field is required.</p> : null;
// })`
//   font-family: "IBM Plex Sans", sans-serif;
//   font-size: 0.875rem;
// `;

// const blue = {
//   100: "#DAECFF",
//   200: "#b6daff",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };
