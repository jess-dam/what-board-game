import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export interface RangeQuestionProps {
    caption: string;
    description?: string;
    skipButton?: {
        label: string
    } 
}

function RangeQuestion() {
  return (
    <section className="p-8 grid place-items-center gap-2 h-full">
      <div className="grid place-items-center p-4 gap-2">
        <img src="/images/person.svg" />
        <h3>Caption</h3>
        <h4>Description</h4>
      </div>
      <Slider />
      <Button>I'm not sure!</Button>
    </section>
  );
}

export default RangeQuestion;
