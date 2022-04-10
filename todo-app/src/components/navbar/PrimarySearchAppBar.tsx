import React, {
  useState, 
  // useEffect 
} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [searchInput, setsearchInput] = useState<null | String>("")
  // const [currentTime, setCurrentTime] = useState<null | String>("");

  // const getTime = (): string => {

  //   const hours = new Date().getHours() < 10 ? "0" + new Date().getHours().toString() : new Date().getHours().toString();
  //   const minutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes().toString() : new Date().getMinutes().toString();
  //   const seconds = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds().toString() : new Date().getSeconds().toString();

  //   return hours + ":" + minutes + ":" + seconds;
  // }

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentTime(getTime());
  //   }, 1000);
  // }, [currentTime]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Todo-app
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // placeholder="Search tasks…"
              placeholder="Search tasks..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event: any) => { setsearchInput(event.target.value); console.log(searchInput) }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography>
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
