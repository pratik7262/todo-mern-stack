import { ModeEditOutline } from "@mui/icons-material";
import { IconButton, Menu, Stack, Tooltip, Typography } from "@mui/material";
import { useToggle } from "../../hooks/useToggle";
import ModalPaper from "./ModalPaper";

const DueDateStack = ({ dueDate, id }) => {
  const editIconStyle = {
    cursor: "pointer",
    color: "gray",
    fontSize: 16,
  };

  const { onClick, el, open, onClose } = useToggle();
  return (
    <Stack pl={1} sx={{ alignItems: "center" }} spacing={1} direction="row">
      <Typography variant="overline">Due Date: {dueDate}</Typography>
      <Tooltip title="Change Due Date">
        <IconButton onClick={onClick} id={`dd-${id}`}>
          <ModeEditOutline sx={editIconStyle} />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-n-menu"
        onClose={onClose}
        open={open}
        MenuListProps={{ "aria-labelledby": `tit-${id}` }}
        anchorEl={el}
      >
        <ModalPaper
          id={id}
          type="date"
          value={dueDate}
          label="New Due Date"
          name="dueDate"
          onClose={onClose}
        />
      </Menu>
    </Stack>
  );
};

export default DueDateStack;
