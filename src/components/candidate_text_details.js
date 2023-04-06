export const CandidateTexDetails = props => {
  return (
    <div>
      <p style={{ color: '#9E9E9E', fontSize: '14px', margin: '0px' }}>
        {props.title}
      </p>
      <p style={{ fontSize: '20px', marginTop: '0px' }}>{props.content}</p>
    </div>
  );
};
