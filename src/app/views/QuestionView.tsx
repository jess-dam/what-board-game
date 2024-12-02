import RangeQuestion, { RangeQuestionProps } from "@/components/questionType/RangeQuestion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type QuestionType = 'RANGE' | 'CATEGORY';

interface QuestionViewProps {
    heading: string;
    questionType: QuestionType;
    content: RangeQuestionProps; 
}

function QuestionView() {
  return (
    <main className="w-screen grid grid-rows-5 h-full">
      <div className="row-span-1">
        <Progress value={20} className="w-full h-[10px]" />
        <h1 className="row-span-1 my-4">Question Heading</h1>
      </div>
      <div className="row-span-3">
        <RangeQuestion />
      </div>

      <div className="w-full flex gap-4 justify-between">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </main>
  );
}

export default QuestionView;
