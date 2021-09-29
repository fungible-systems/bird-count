import { useAuth } from 'micro-stacks/react';
import Button from '@mui/material/Button';
import NoSsr from '@mui/core/NoSsr';

const WalletConnectButton = () => {
  const { isSignedIn, handleSignIn, handleSignOut, isLoading } = useAuth();
  return (
    <NoSsr>
      <Button variant="contained" color="primary" onClick={isSignedIn ? handleSignOut : handleSignIn}>
        {isLoading ? 'Loading...' : isSignedIn ? 'Sign out' : 'Connect Stacks Wallet'}
      </Button>
    </NoSsr>
  );
};

export default WalletConnectButton;
