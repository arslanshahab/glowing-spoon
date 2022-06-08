const Footer = () => {
  return (
    <footer>
      <div className='hidden justify-between items-center py-4 px-6 lg:px-10 sm:flex'>
        <span>Forest.io &copy; {new Date().getFullYear()}</span>
        <span>To protect every forest.</span>
      </div>
    </footer>
  )
}

export default Footer
