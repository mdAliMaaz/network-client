import Actions from "./Actions";

const Comments = () => {
  return (
    <div className="flex flex-col items-start border-b">
      <div className="flex items-center w-full p-2 my-2 space-x-5">
        <div className="w-10 h-10">
          <img
            src="https://pbs.twimg.com/profile_images/1700165991295307776/c9ULDyMW_400x400.jpg"
            alt=""
            className="w-full rounded-full "
          />
        </div>
        <div>
          <p>This is the wonder full post i am reallly loving it.</p>
        </div>
      </div>
      <Actions />
    </div>
  );
};

export default Comments;
