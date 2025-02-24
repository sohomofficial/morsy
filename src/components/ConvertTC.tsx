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

const formSchema = z.object({
  text_to_code: z.string(),
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 space-y-8'>
          <FormField
            control={form.control}
            name='text_to_code'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter your text here'
                    rows={9}
                    className='uppercase border-teal-400 focus-visible:ring-0 focus-visible:ring-offset-0'
                    {...field}
                  />
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

      <div className='mt-6 text-center py-16'>
        <div className='flex justify-between'>
          <h2 className='text-sm font-medium'>Output</h2>
          {output && <CopyButton textToCopy={output} />}
        </div>
        <p className='text-sm p-2 mt-2'>
          {output
            ? output
            : 'Your output code will appear here. Type something and submit to see it.'}
        </p>
      </div>
    </>
  );
};

export default ConvertTC;
