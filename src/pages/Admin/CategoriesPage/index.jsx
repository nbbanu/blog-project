import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import CustomizedTable from "./TopicsTable";
import ModalUnstyled from "./TopicSaveModal";

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <div className="flex flex-column">
      <CustomizedTable />
        <div style={{alignSelf:"flex-end", marginTop:20}}>
          <ModalUnstyled />
        </div>
      </div>
    </div>
  );
};
export default CategoriesPage;
