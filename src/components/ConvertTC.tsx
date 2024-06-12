'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { textToMorse } from '@/lib/utils';
import { useState } from 'react';
import { Textarea } from './ui/textarea';
import CopyButton from './CopyButton';

const TTMRegex = /^[A-Za-z0-9\s]+$/;

const formSchema = z.object({
  text_to_code: z.string().regex(TTMRegex, {
    message: 'Your input can only contain alphanumeric characters and spaces',
  }),
});

const ConvertTC = () => {
  const [output, setOutput] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(() => textToMorse(values.text_to_code));
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-6 space-y-8 rounded-lg p-4 shadow-lg dark:border sm:p-6 lg:p-8'
        >
          <FormField
            control={form.control}
            name='text_to_code'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text to code</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter your text here' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>

      <div className='px-4 mt-6 text-center py-16 sm:px-6 lg:px-8 shadow-lg dark:border'>
        <div className='flex justify-between'>
          <h2 className='text-sm font-medium'>Output</h2>
          {output && <CopyButton textToCopy={output} />}
        </div>
        <p className='text-base mt-8 bg-primary-foreground px-3 py-2 rounded-md'>
          {output
            ? output
            : 'Your output code will appear here. Type something and submit to see it.'}
        </p>
      </div>
    </>
  );
};

export default ConvertTC;
