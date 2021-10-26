import headerStyles from '../styles/Header.module.css';

const Header = () => {
  const x = 7;
  return (
    <div>
      <h1 className="title"><span>WebDev</span> News</h1>
      <style jsx>
        {`
          .title {
            color: ${x === 5 ? 'red' : 'blue'}
          }
        `}
      </style>
    </div>
  );
};

export default Header;
