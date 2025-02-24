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
import { morseToText } from '@/lib/utils';
import { useState } from 'react';
import { Textarea } from './ui/textarea';
import CopyButton from './CopyButton';

const MTTRegex = /^[.\-\/\s]+$/;

const formSchema = z.object({
  code_to_text: z.string().regex(MTTRegex, {
    message: 'Your input can only contain ., -, / and spaces',
  }),
});

const ConvertCT = () => {
  const [output, setOutput] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(() => morseToText(values.code_to_text));
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 space-y-8'>
          <FormField
            control={form.control}
            name='code_to_text'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter your code here'
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
        <p className='text-sm mt-2 p-2'>
          {output
            ? output
            : 'Your output text will appear here. Type something and submit to see it.'}
        </p>
      </div>
    </>
  );
};

export default ConvertCT;
