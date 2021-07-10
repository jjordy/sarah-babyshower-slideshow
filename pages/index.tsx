import { useState } from "react";
import Image from "next/image";
import Header from "next/head";
import Slide from "shared/Slide";

export default function IndexPage() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  }
  const handlePrev = () => {
    if (step > 0)
      setStep(step - 1);
  }
  return (
    <div className="bg-white">
      <Header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bilbo&display=swap" rel="stylesheet" />
      </Header>
      <div className="h-screen bg-gradient-to-br from-white via-white to-blue-300 mb-auto flex flex-col justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={400} height={300} />
        </div>
        <div className="flex flex-col items-center justify-center max-h-64 mb-auto">
          <Slide active={step === 0}>
            <h1 className=" text-blue-400 text-center heading text-6xl tracking-tighter uppercase">
              Sarah is having a baby
            </h1>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase">
              Lets have some fun
            </h2>
          </Slide>
          <Slide active={step === 1}>
            <h1 className=" text-blue-400 text-center heading text-4xl tracking-tighter uppercase">
              And we all know...
            </h1>
            <h2 className="text-blue-400 text-center heading text-6xl tracking-tighter uppercase">
              Having a baby can be INTENSE
            </h2>
          </Slide>
          <Slide active={step === 2}>
            <h1 className=" text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl mb-8 ">
              And with that intensity comes a lot of crazy faces...
            </h1>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              That may look like something else if lacking context...
            </h2>
          </Slide>
          <Slide active={step === 3}>
            <h2 className="text-blue-400 text-center heading text-6xl tracking-tighter uppercase max-w-2xl">
              Labor <br />
              Or
              <br /> Lovin
            </h2>
          </Slide>
          <Slide active={step === 4}>
            <Image src="/Labor/1_1.png" alt="GUESS WHAT IT IS" width={540} height={270} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 5}>
            <Image src="/Labor/1.jpeg" alt="GUESS WHAT IT IS" width={540} height={270} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed labor you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 6}>
            <Image src="/Lovin/2.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 7}>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed lovin you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 8}>
            <Image src="/Lovin/3.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 9}>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed lovin you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 10}>
            <Image src="/Labor/2.png" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 11}>
            <Image src="/Labor/2_2.png" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed labor you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 12}>
            <Image src="/Labor/3.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 13}>
            <Image src="/Labor/3_3.jpg" alt="GUESS WHAT IT IS" width={500} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed labor you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 14}>
            <Image src="/Labor/4.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 15}>
            <Image src="/Labor/4_4.jpg" alt="GUESS WHAT IT IS" width={500} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed labor you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 16}>
            <Image src="/Lovin/1.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 17}>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed lovin you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 18}>
            <Image src="/Labor/5.jpg" alt="GUESS WHAT IT IS" width={250} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Take a guess
            </h2>
          </Slide>
          <Slide active={step === 19}>
            <Image src="/Labor/5_5.jpg" alt="GUESS WHAT IT IS" width={500} height={250} />
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              If you guessed labor you were correct!!!!!!
            </h2>
          </Slide>
          <Slide active={step === 20}>
            <h2 className="text-blue-400 text-center heading text-4xl tracking-tighter uppercase max-w-2xl">
              Thanks for coming and thanks for celebrating Sarah.
            </h2>
          </Slide>
        </div>
        <div className="flex justify-end items-end h-48 static bottom-0 mb-4">
          <button
            className="shadow-xl rounded-lg  uppercase text-white  font-black text-2xl bg-blue-400 px-4 py-3 mr-2"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            disabled={step === 20}
            className="shadow-xl rounded-lg  uppercase text-white  font-black text-2xl bg-green-400 px-4 py-3 mr-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
