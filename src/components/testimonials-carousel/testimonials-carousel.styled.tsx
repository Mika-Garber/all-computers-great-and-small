import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export const CarouselRoot = styled(Box)({
  position: 'relative',
  width: '100%',
});

export const CarouselViewport = styled(Box)({
  overflow: 'hidden',
  width: '100%',
});

export const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'offset',
})<{ offset: number }>(({ offset }) => ({
  display: 'flex',
  transition: 'transform 0.4s ease',
  transform: `translateX(-${offset}%)`,
}));

export const CarouselSlide = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  paddingInline: theme.spacing(0.5),
  boxSizing: 'border-box',
}));

export const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 12px rgba(45, 45, 42, 0.12)',
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const DotsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

export const DotButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: isActive ? theme.palette.primary.main : 'rgba(45, 45, 42, 0.2)',
  transition: 'background-color 0.2s ease',
}));
