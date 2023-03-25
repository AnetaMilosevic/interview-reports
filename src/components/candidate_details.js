import { CandidateTexDetails } from "./candidate_text_details"

export const CandidateDetails= (props)=>{

    return (
        <section>
            <img src={props.candidate.avatar} width="200px" height="200px"/>
            <CandidateTexDetails title="Name:" content={props.candidate.candidateName}/>
        </section>
    )
}