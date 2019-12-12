module.exports = (Button, text) => (
  <div className="button-wrapper">
    <Button>
      <span className="button-inner">{text}</span>
    </Button>
  </div>
)