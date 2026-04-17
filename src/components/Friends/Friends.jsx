import { Link } from 'react-router';

const Friends = ({ friends }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10'>
      {friends.map(friend => (
        <Link to={`/${friend.id}`} key={friend.id}>
          <div className='flex flex-col items-center gap-2 p-4 shadow-sm hover:bg-gray-100 cursor-pointer rounded-2xl'>
            <img src={friend.picture} className='w-16 h-16 rounded-full' />           
            
            
              <h3 className='text-xl font-bold'>{friend.name}</h3>
              <p className='text-gray-500'>
                {friend.days_since_contact} days ago
              </p>
              <p className='px-3 py-1 rounded-full bg-green-300 text-sm w-fit my-3'>
                {friend.tags[0]}
              </p>
               <p  className={`px-3 py-1 rounded-full text-white text-sm w-fit ${
                       friend.status === "overdue"
                      ? "bg-red-500"
                      : friend.status === "almost due"
                       ? "bg-yellow-500"
                    : "bg-green-900"
                              }`}
                  >
                 {friend.status}
                </p>

            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Friends;