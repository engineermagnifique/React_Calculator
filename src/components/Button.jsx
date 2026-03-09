const CalButton = ({ prop, color, role, onPress }) => {
  return (
    <button
      type="button"
      onClick={()=>onPress(prop)}
      className={`
        ${role === 'zero' ? 'col-span-2' : 'col-span-1'} 
        h-16 w-full  
        flex items-center justify-center
        text-[20px] font-semibold rounded-sm
        ${color === 'blue-900' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'}
      `}
    >
      {prop}
    </button>
  );
};

export default CalButton;