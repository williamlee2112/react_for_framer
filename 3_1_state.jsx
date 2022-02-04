function Hovercraft() {
    const [text, setText] = useState("Craft") // Default is Craft
    const mouseOver = () => setText("Hover")
    const mouseOut = () => setText("Craft")
  
    return <div onMouseOver={mouseOver} onMouseOut={mouseOut}>{text}</div>
  }
  
  // Component usage
  <Hovercraft />