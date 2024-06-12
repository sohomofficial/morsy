'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { morseToText, textToMorse } from '@/lib/utils';
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-6 space-y-8 rounded-lg p-4 shadow-lg dark:border sm:p-6 lg:p-8'
        >
          <FormField
            control={form.control}
            name='code_to_text'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code to Text</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter your code here' {...field} />
                </FormControl>
                <FormDescription>
                  ⚠ If you enter an invalid code, you will be ignored, just like
                  your crush.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>

      <div className='px-4 text-center mt-6 py-16 sm:px-6 lg:px-8 shadow-lg dark:border'>
        <div className='flex justify-between'>
          <h2 className='text-sm font-medium'>Output</h2>
          {output && <CopyButton textToCopy={output} />}
        </div>
        <p className='text-base mt-8 bg-primary-foreground px-3 py-2 rounded-md'>
          {output
            ? output
            : 'Your output text will appear here. Type something and submit to see it.'}
        </p>
      </div>
    </>
  );
};

export default ConvertCT;
