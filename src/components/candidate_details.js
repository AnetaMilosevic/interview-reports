import { CandidateTexDetails } from "./candidate_text_details"
import { formatDate } from './../utils/format-date';

export const CandidateDetails= (props)=>{

    return (
        <section>
        <div className= "container">
            <div className="row">
                <div className="col">
                    <img src={props.candidate.avatar} width="200px" height="200px"/>
                </div>
                <div className="col">
                    <CandidateTexDetails title="Name:" content={props.candidate.name}/>
                    <CandidateTexDetails title="Email:"content= {props.candidate.email}/>
                </div>
                <div className="col">
                    <CandidateTexDetails title="Date of birth:" content={formatDate(props.candidate.birthday)}/>
                    <CandidateTexDetails title="Education:"content= {props.candidate.education}/>
                </div>
            </div>
        </div>
        </section>

    )
}