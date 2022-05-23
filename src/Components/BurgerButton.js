const BurgerButton = () => {
  function animateHamburger() {
    document.querySelector("#hamburger-button").toggleClass("open");
  }

  document.querySelector("#hamburger-button").(function () {
    animateHamburger();
  });

  return (
    <>
      <div class="navbar">
        <ul>
          <li>item one</li>
          <li>item pew</li>
          <li>item three</li>
          <li>item smores</li>
        </ul>
      </div>

      <div id="hamburger-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default BurgerButton;
