
import './allQuestions.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
const AllQuestions = ({ question }) => {
console.log('from allquestions:', question)
  return (
    <div className='all-questions'>
      <div className="all-questions-container">
        <div className="question-answer">
          <div style={{ width: '90%', color: 'blue' }}>
            <p>{question.title}</p>
          </div>
          <div className="answer_tag_container">
            {question.tags.map((t) => (
              <div className='answer_tag'>
                <span>{t}</span>
              </div>
            ))}

          </div>

          <div className="modified">
            <DescriptionOutlinedIcon className="m_icon" />
            <span>answered {new Date(question.creation_date)} sec ago <b>{question.owner.display_name}</b> </span>
          </div>
        </div>


        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <div className="inner-all-option">
                <p>0</p>
                <span>votes</span>
                <ThumbUpOutlinedIcon className="mat_icon" />
              </div>
              <div className="inner-all-option">
                <p>{question.answer_count}</p>
                <span>answer</span>
                <QuestionAnswerOutlinedIcon className="mat_icon" />
              </div>
              <div className="inner-all-option">
                <p>{question.view_count}</p>
                <span>views</span>
                <VisibilityOutlinedIcon className="mat_icon" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default AllQuestions