interface IUserProfile {
  image: string;
  firstName: string;
  lastName: string;
}

export const UserProfile = (props: IUserProfile) => {
  const { image, firstName, lastName } = props;

  return (
    <div className={'flex gap-2'}>
      <img src={image} alt={firstName} loading="lazy" width={40} height={40} />
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
      </ul>
    </div>
  );
};
