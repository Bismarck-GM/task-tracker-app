import Button from "./Button";

const Header = ({title}) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Hello' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
