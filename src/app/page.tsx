import ConvertCT from '@/components/ConvertCT';
import ConvertTC from '@/components/ConvertTC';
import { ModeToggle } from '@/components/mode-toggle';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Home = () => {
  return (
    <div className='mx-auto max-w-screen-xl min-h-screen place-content-center py-16 px-4 sm:px-6 lg:px-8 font-mono'>
      <div className='mx-auto max-w-xl'>
        <Card className='ring-1 ring-teal-400'>
          <CardHeader>
            <CardTitle className='text-teal-400'>Morsy</CardTitle>
            <CardDescription>
              Hey, I&apos;m Morsy. I help you convert text to morse code and
              vice versa.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='text_to_code'>
              <TabsList className='w-full'>
                <TabsTrigger value='text_to_code' className='w-full'>
                  T &rarr; C
                </TabsTrigger>
                <TabsTrigger value='code_to_text' className='w-full'>
                  C &rarr; T
                </TabsTrigger>
              </TabsList>
              <TabsContent value='text_to_code'>
                <ConvertTC />
              </TabsContent>
              <TabsContent value='code_to_text'>
                <ConvertCT />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className='w-full flex flex-col gap-4 sm:flex-row items-center justify-between'>
            <p className='text-sm'>
              Created with ❤️ by{' '}
              <a href='https://github.com/sohomofficial' target='_blank'>
                Sohom
              </a>
            </p>
            <ModeToggle />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;
