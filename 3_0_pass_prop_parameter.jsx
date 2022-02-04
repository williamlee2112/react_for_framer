function SquareImage({ src, size }) {
    return <img src={src} width={size} height={size} />
  }
  
  // Component usage
  <SquareImage src="test.jpg" size="100px" />