'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} className="w-full">
      Logout
    </Button>
  );
};

export default LogoutButton;
