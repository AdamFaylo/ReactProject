import { Switch } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDark } from '../../features/DarkMode-Slice';
import { IconSun, IconMoonStars } from '@tabler/icons';

export default function SegmentedToggle() {
  const styleDarkMode  = {
    padding: "2rem",
    height: "25px",
  }
  const styleIcon = {
    width: "2rem",
    height: "25px",
  }
  const isDark = useSelector(state => state.isDark) 
  const dispatch = useDispatch()
  return (
    <>
    <Switch style={styleDarkMode} checked={isDark} 
     onLabel={<IconSun style={styleIcon}/>}
     color={isDark ? 'black' : 'red'}
     offLabel={<IconMoonStars style={styleIcon}/>}
     onChange={() => dispatch(toggleDark())} />
    </>

  );
}
