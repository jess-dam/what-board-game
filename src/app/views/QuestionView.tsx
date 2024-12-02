import { Button } from "@/components/ui/button";

function QuestionView() {
  return (
    <main className='w-screen'>
      <h1>Question Heading</h1>
      {/* question input type */}
      <div className="w-full flex gap-6">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </main>
  );
}

export default QuestionView;
