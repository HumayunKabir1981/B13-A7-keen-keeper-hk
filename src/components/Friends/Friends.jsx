import { Link } from 'react-router';

const Friends = ({ friends }) => {
  return (
    <div className='grid grid-cols-4 gap-5'>
      {friends.map(friend => (
        <Link to={`/${friend.id}`} key={friend.id}>
          <div className='flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer'>
            <img src={friend.picture} className='w-16 h-16 rounded-full' />
            <div>
              <h3 className='text-xl font-bold'>{friend.name}</h3>
              <p className='text-gray-500'>
                {friend.days_since_contact} days
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Friends;