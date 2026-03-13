import { useState } from 'react'

// 4. TODO: Accept the handler as a prop and attach it to the button's onClick
function LoyaltyButton({buttonText, onSmash}) {
  return <button onClick={onSmash}>{buttonText}</button>
}

function LoyaltyCard() {
  // 1. TODO: Add a points state variable starting at 0
    const [points, setPoints] = useState(0)

  // 2. TODO: Define a handleStamp function that adds 1 to points
  function handleStamp() {

  }

  return (
    <div>
      <h2>Loyalty Card</h2>
      <p>Points:  {points}</p>
      {/* 3. TODO: Pass handleStamp to LoyaltyButton as a prop called onStamp */}
      <LoyaltyButton buttonText="are you loyal?" onSmash={()=>{alert('We appreciate your loyalty, 2 coffe free')}}/>
    </div>
  )
}

export default LoyaltyCard
