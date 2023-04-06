export const AdminTexDetails = props => {
  return (
    <div>
      <p style={{ fontSize: '20px', marginBottom: '0px' }}>{props.content}</p>
      <p style={{ color: '#9E9E9E', fontSize: '10px', margin: '0px' }}>
        {props.title}
      </p>
    </div>
  );
};
