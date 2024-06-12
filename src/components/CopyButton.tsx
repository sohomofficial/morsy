import { Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState<string>('');

  useEffect(() => {
    setCopySuccess('');
  }, [textToCopy]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess('✔');
    } catch (err) {
      setCopySuccess('✖');
    }
  };

  return (
    <div>
      {copySuccess ? (
        <Button size={'icon'} variant={'secondary'} disabled>
          {copySuccess}
        </Button>
      ) : (
        <Button size={'icon'} variant={'secondary'} onClick={copyToClipboard}>
          <Copy className='h-4 w-4' />
        </Button>
      )}
    </div>
  );
};

export default CopyButton;
