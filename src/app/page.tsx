import ConvertCT from '@/components/ConvertCT';
import ConvertTC from '@/components/ConvertTC';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Home = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-xl'>
        <h1 className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'>
          Morsy
        </h1>

        <p className='mt-4 text-center text-xl text-muted-foreground'>
          Hey, I&apos;m Morsy. I help you convert text to morse code and vice
          versa.
        </p>
        <hr className='my-4' />

        <p className='mb-4 text-sm'>
          But wait, what is morse code? Well, in simple terms it is a system of
          encoding text characters using sequences of dots (.) and dashes (-) to
          represent letters and numbers, used for communication. Give it a try
          and send someone a secret coded message which most of the people
          won&apos;t understand.
        </p>
        <ModeToggle />
        <Tabs defaultValue='text_to_code' className='mt-6'>
          <TabsList className='w-full'>
            <TabsTrigger value='text_to_code' className='w-full'>
              Text to Code
            </TabsTrigger>
            <TabsTrigger value='code_to_text' className='w-full'>
              Code to Text
            </TabsTrigger>
          </TabsList>
          <TabsContent value='text_to_code'>
            <ConvertTC />
          </TabsContent>
          <TabsContent value='code_to_text'>
            <ConvertCT />
          </TabsContent>
        </Tabs>
        <p className='mt-4 text-center'>
          Created with ❤️ by
          <Button variant={'link'} asChild className='pl-1 font-bold'>
            <a href='https://github.com/sohomofficial' target='_blank'>
              Sohom
            </a>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Home;
