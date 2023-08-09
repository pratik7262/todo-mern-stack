import { ModeEditOutline } from "@mui/icons-material";
import { IconButton, Menu, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useToggle } from "../../hooks/useToggle";
import ModalPaper from "./ModalPaper";

const DescriptionStack = ({ desc, id }) => {
  const editIconStyle = {
    cursor: "pointer",
    color: "gray",
    fontSize: 16,
  };
  const { onClick, el, open, onClose } = useToggle();
  return (
    <Stack spacing={1} pl={1}>
      <Typography variant="body1">
        {desc}
        {"  "}
        <Tooltip title="Edit Description">
          <IconButton onClick={onClick} id={`des-${id}`}>
            <ModeEditOutline
              sx={{
                ...editIconStyle,
                fontSize: 18,
              }}
            />
          </IconButton>
        </Tooltip>
      </Typography>
      <Menu
        id="basic-n-menu"
        onClose={onClose}
        open={open}
        MenuListProps={{ "aria-labelledby": `tit-${id}` }}
        anchorEl={el}
      >
        <ModalPaper
          onClose={onClose}
          id={id}
          value={desc}
          label="New Description"
          name="description"
        />
      </Menu>
    </Stack>
  );
};

export default DescriptionStack;
