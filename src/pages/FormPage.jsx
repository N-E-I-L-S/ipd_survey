import React, { useState } from 'react'
import Form from '../components/Form'
import Loader from '../components/Loader';

export default function FormPage() {
  const labels = [
    ["I do not feel sad.", "I feel sad", "I am sad all the time and I can't snap out of it.", "I am so sad and unhappy that I can't stand it."],
    ["I am not particularly discouraged about the future.", "I feel discouraged about the future.", "I feel I have nothing to look forward to.", "I feel the future is hopeless and that things cannot improve."],
    ["I do not feel like a failure.", "I feel I have failed more than the average person.", "As I look back on my life, all I can see is a lot of failures.", "I feel I am a complete failure as a person."],
    ["I get as much satisfaction out of things as I used to.", "I don't enjoy things the way I used to.", "I don't get real satisfaction out of anything anymore.", "I am dissatisfied or bored with everything."],
    ["I don't feel particularly guilty.", "I feel guilty a good part of the time.", "I feel quite guilty most of the time.", "I feel guilty all of the time."],
    ["I don't feel I am being punished.", "I feel I may be punished.", "I expect to be punished.", "I feel I am being punished."],
    ["I don't feel disappointed in myself.", "I am disappointed in myself.", "I am disgusted with myself.", "I hate myself."],
    ["I don't feel I am any worse than anybody else.", "I am critical of myself for my weaknesses or mistakes.", "I blame myself all the time for my faults.", "I blame myself for everything bad that happens."],
    ["I don't have any thoughts of killing myself.", "I have thoughts of killing myself, but I would not carry them out.", "I would like to kill myself.", "I would kill myself if I had the chance."],
    ["I don't cry any more than usual.", "I cry more now than I used to.", "I cry all the time now.", "I used to be able to cry, but now I can't cry even though I want to."],
    ["I am no more irritated by things than I ever was.", "I am slightly more irritated now than usual.", "I am quite annoyed or irritated a good deal of the time.", "I feel irritated all the time."],
    ["I have not lost interest in other people.", "I am less interested in other people than I used to be.", "I have lost most of my interest in other people.", "I have lost all of my interest in other people."],
    ["I make decisions about as well as I ever could.", "I put off making decisions more than I used to.", "I have greater difficulty in making decisions more than I used to.", "I can't make decisions at all anymore."],
    ["I don't feel that I look any worse than I used to.", "I am worried that I am looking old or unattractive.", "I feel there are permanent changes in my appearance that make me look unattractive.", "I believe that I look ugly."],
    ["I can work about as well as before.", "It takes an extra effort to get started at doing something.", "I have to push myself very hard to do anything.", "I can't do any work at all."],
    ["I can sleep as well as usual.", "I don't sleep as well as I used to.", "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", "I wake up several hours earlier than I used to and cannot get back to sleep."],
    ["I don't get more tired than usual.", "I get tired more easily than I used to.", "I get tired from doing almost anything.", "I am too tired to do anything."],
    ["My appetite is no worse than usual.", "My appetite is not as good as it used to be.", "My appetite is much worse now.", "I have no appetite at all anymore."],
    ["I haven't lost much weight, if any, lately.", "I have lost more than five pounds.", "I have lost more than ten pounds.", "I have lost more than fifteen pounds."],
    ["I am no more worried about my health than usual.", "I am worried about physical problems like aches, pains, upset stomach, or constipation.", "I am very worried about physical problems and it's hard to think of much else.", "I am so worried about my physical problems that I cannot think of anything else."]
  ]
  const [loading, setLoading] = useState(false)
  const [responses, setResponses] = useState([]);
  const [submitted, setSubmitted] = useState(false)
   const handleFormSubmit = async () => {
    setLoading(true)
    console.log('Responses:', responses);
    const url = `https://ipd-backend-hd6n.onrender.com/api/survey`
    try {
      const body = { responses }
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.status === 200)
        {
          console.log("ok")
          setSubmitted(true)
        }
      else
        console.log('error')
    }
    catch {
      console.log('error')
    }
    setLoading(false)
  };
  function checkResponseLength() {
    const length = responses.length
    if (length >= 10)
      return false
    return true
  }
  if(loading)
  return <Loader/>
  return (
    <div className="p-4 bg-[#212121] text-white">
      <div className={`${submitted? 'flex' : 'hidden'} w-full h-[100vh] justify-center items-center`}>
        Thank you. Your response has been recorded! You may close this tab now
      </div>
      <div className={`${submitted? 'hidden' : 'block'}`}>
        <h2 className='text-center font-bold text-xl'>Survey Form</h2>
        <p className='text-center text-md'>Please select the option from each section that best suits you</p>
        <p className='text-center text-sm italic'>Kindly select from atleast 10 sections</p>
        <div className='p-8'>
          {
            labels.map((label, index) => {
              return (
                <Form key={index} label={label} index={index + 1} onOptionClick={(optionIndex) => setResponses((prevResponses) => [...prevResponses, { questions: index + 1, answer: optionIndex }])} />
              )
            })
          }
          <div className="p-4 bottom-0 sticky">
            <button disabled={checkResponseLength()} onClick={handleFormSubmit} className={`w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded ${checkResponseLength() ? 'opacity-50' : ''}`}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
