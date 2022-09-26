import {  Switch } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDark } from '../../features/DarkMode-Slice';
import { IconSun, IconMoonStars } from '@tabler/icons';


export default function SegmentedToggle() {
  const isDark = useSelector(state => state.isDark) 
  const dispatch = useDispatch()
  return (
     <Switch  checked={isDark} 
     onLabel={<IconSun/>}
     color={isDark ? 'yelow' : 'red'}
     offLabel={<IconMoonStars/>}
     onChange={() => dispatch(toggleDark())} />
  );
}


