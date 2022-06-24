import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GameMC({ question, answer, setAnswer }) {
  const changeOption = (e, optAnswer) => {
    e.preventDefault();
    setAnswer(optAnswer);
  };
  console.log(answer);
  return (
    <>
      {question.options.map((option, index) => {
        return (
          <div className="w-[800px] flex-row flex items-center pl-3 mb-3">
            <button
              className={`border-2 border-stone-200 rounded-full h-[30px] w-[30px] mr-2 flex items-center justify-center ${
                option.answer === answer
                  ? "bg-green-500 text-green-50 border-green-500"
                  : "text-stone-400"
              }`}
              key={index}
              onClick={(e) => changeOption(e, option.answer)}
            >
              <FontAwesomeIcon
                className="text-sm"
                icon={faCheck}
              ></FontAwesomeIcon>
            </button>
            <div className="flex items-center px-3 h-[48px] border-2 border-stone-200 rounded-3xl w-full">
              {option["answer"]}
            </div>
          </div>
        );
      })}
    </>
  );
}
