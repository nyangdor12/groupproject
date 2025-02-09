import Options from "./Option";

export default function Question({q, selectedOption, onOptionChange, onSubmit}) {

    return (
      <div>
          <h3>Question {q.id}</h3>
          <h5 className="mt-2">{q.question}</h5>
          <form onSubmit={onSubmit} className="mt-2 mb-2">
              <Options
                  options={q.options}
                  selectedOption={selectedOption}
                  onOptionChange={onOptionChange}
              />
              <button type="submit" className="btn btn-primary mt-2">
                  SUBMIT
              </button>
          </form>
      </div>
    );
}