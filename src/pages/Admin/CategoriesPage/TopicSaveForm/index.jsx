import * as React from "react";
import { Autocomplete, Button, Divider, TextField } from "@mui/material";
import { useState } from "react";
import {
  createTopic,
  getAllCategories,
  getAllTopics,
  getSubcategoryById,
  updateTopics,
} from "../../../../service";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

export default function BasicFormControl({ selectedItem, setOpen }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(null);
  const [subcategoryValue, setSubcategoryValue] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  React.useEffect(() => {
    loadAllCategories();
  }, []);

  const loadAllCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  const loadSubcategoriesById = async (_id) => {
    const data = await getSubcategoryById(_id);
    setSubcategories(data);
  };

  React.useState(() => {
    if (selectedItem) {
      setTitle(selectedItem?.title);
      setCategoryValue(selectedItem?.category);
      setSubcategoryValue(selectedItem?.subcategory);
      loadSubcategoriesById(selectedItem?.category?.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      subcategoryId: subcategoryValue?.id || null,
      categoryId: categoryValue?.id || null,
    };
    const newData = {
      id: selectedItem?.id,
      title: title,
      subcategoryId: subcategoryValue?.id || null,
      categoryId: categoryValue?.id || null,
    };

    if (!selectedItem) {
      createTopic(formData)
        .then((res) => {
          setOpen(false);
          Swal.fire({
            title: "Konu Başarıyla Eklendi",
            color: "#242424",
            icon: "success",
            iconColor: "#ffc016",
          });
        })
        .catch((err) => setError(err.statusCode));
    } else {
      updateTopics(newData)
        .then((res) => {
          setOpen(false);
          Swal.fire({
            title: "Konu Başarıyla Değiştirildi",
            color: "#242424",
            icon: "success",
            iconColor: "#ffc016",
          });
        })
        .catch((err) => setError(err.statusCode));
    }
  };

  return categories ? (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Başlık"
        sx={{ width: 400, marginTop: 3 }}
        required
        value={title}
        helperText={error == 400 && "Başlık ile Kategori aynı olamaz!"}
        // FormHelperTextProps={}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Autocomplete
        id="combo-box-demo"
        freeSolo
        options={categories}
        getOptionLabel={(option) => option?.title}
        value={categoryValue}
        onChange={(_, newCategoryValue) => {
          setSubcategoryValue("");
          setCategoryValue(newCategoryValue);
          loadSubcategoriesById(newCategoryValue?.id);
        }}
        sx={{ width: 400, marginTop: 3 }}
        renderInput={(params) => <TextField {...params} label="Ana Kategori" />}
      />
      <Autocomplete
        freeSolo
        id="combo-box-demo"
        options={subcategories}
        getOptionLabel={(option) => (option?.title ? option?.title : "")}
        value={subcategoryValue}
        onChange={(_, newSubcategoryValue) =>
          setSubcategoryValue(newSubcategoryValue)
        }
        sx={{ width: 400, marginTop: 3 }}
        renderInput={(params) => <TextField {...params} label="Üst Kategori" />}
      />
      <Divider style={{ marginTop: 50 }}>
        <Button type="submit" color="success" variant="contained">
          KAYDET
        </Button>
      </Divider>
    </form>
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
