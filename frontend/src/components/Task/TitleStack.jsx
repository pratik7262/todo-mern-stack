import { ModeEditOutline } from "@mui/icons-material";
import { IconButton, Menu, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useToggle } from "../../hooks/useToggle";
import ModalPaper from "./ModalPaper";

const TitleStack = ({ title, id }) => {
  const editIconStyle = {
    cursor: "pointer",
    color: "gray",
    fontSize: 16,
  };
  const { onClick, el, open, onClose } = useToggle();
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography variant="h6">{title}</Typography>
      <Tooltip title="Edit Title">
        <IconButton id={`tit-${id}`} onClick={onClick}>
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
        <ModalPaper id={id} onClose={onClose} value={title} label="New Title" name="title" />
      </Menu>
    </Stack>
  );
};

export default TitleStack;
