import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Hello' onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
