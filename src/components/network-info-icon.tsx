import * as React from 'react';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { networkAtom } from 'micro-stacks/react';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import CircularProgress from '@mui/material/CircularProgress';
import { green, red } from '@mui/material/colors';
import { networkInfoAtom } from '@store/network-info';
import { networkOfflineAtom } from '@store/network-offline';
import { loadingInfoAtom } from '@store/loading-info';
import BitcoinIcon from '@components/bitcoin-icon';
import StacksIcon from '@components/stacks-icon';

interface NetworkIconProps {
  size?: number;
  top?: number;
  left?: number;
  icon?: 'network' | 'stacks' | 'bitcoin';
}

export default function NetworkInfoIcon({
  size = 12,
  top = 9,
  left = 6,
  icon = 'network',
}: NetworkIconProps) {
  const [networkOffline] = useAtom(networkOfflineAtom);
  const [networkInfo, dispatchNetworkInfo] = useAtom(networkInfoAtom);
  const [isLoadingInfo, setIsLoadingInfo] = useAtom(loadingInfoAtom);
  const [network] = useAtom(networkAtom);
  const timer = React.useRef<number>();

  // fetch latest data
  const refetch = () => {
    dispatchNetworkInfo({ type: 'refetch' });
    refresh();
  };

  // a visual progress indicator
  const refresh = (e?: React.MouseEvent<HTMLElement>) => {
    if (!isLoadingInfo) {
      setIsLoadingInfo(true);
      timer.current = window.setTimeout(() => {
        setIsLoadingInfo(false);
      }, 2000);
      e === undefined || e.preventDefault();
    }
  };

  // run once after initial render
  useEffect(() => {
    console.log('fetch info once after initial render');
    refetch();
  }, []);

  // refresh when info is updated
  useEffect(() => {
    console.log('fetch info once after initial render');
    refresh();
  }, [networkInfo]);

  // refetch and refresh when network is changed
  useEffect(() => {
    console.log('refetch info, network changed');
    refetch();
  }, [network.getCoreApiUrl()]);

  return (
    <>
      {icon === 'bitcoin' ? (
        <BitcoinIcon />
      ) : icon === 'stacks' ? (
        <StacksIcon />
      ) : (
        <FiberManualRecordTwoToneIcon color={networkOffline ? 'error' : 'success'} />
      )}
      {isLoadingInfo && (
        <CircularProgress
          size={size}
          sx={{
            color: networkOffline ? red[200] : green[200],
            position: 'absolute',
            top: { top },
            left: { left },
            zIndex: 1,
            width: 0,
          }}
        />
      )}
    </>
  );
}
