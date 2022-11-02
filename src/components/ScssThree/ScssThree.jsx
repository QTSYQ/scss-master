import "./ScssThree.scss";
export default function ScssThree() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>schwartzmedia</li>
            <li></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero">
          <img className="hero--img" src="" />
          <h3 className="hero--title">News that lasts.</h3>
          <p className="hero--text">
            <span>About</span>
            Schwartz Media publishes intelligent news and current affairs that
            breaks the 24-hour news cycle. We offer a nuanced examination of
            Australia and the world, focused on fresh insight and literary
            expression. Our audience reads to know, not just to agree. We invest
            in long-form journalism where the issues demand it, providing
            writing of a quality that makes difficult topics clear. Schwartz
            Media publishes Australia’s most respected writers across
            <em>The Saturday Paper, The Monthly</em> magazine and the daily
            podcast <em>7am</em>, alongside our sister publications, Quarterly
            Essay and Australian Foreign Affairs.
          </p>
          <a className="hero--link" href="#">
            <span>&rarr;</span>View our Companies
          </a>
        </div>
        <div className="products">
          <div className="product">
            <div>
              <h3>Journalism</h3>
              <p>
                Our journalists create in-depth, independent, original public
                interest reporting, focusing on storytelling and insight.
              </p>
              <a href="#">Learn more</a>
            </div>
            <img src="./feature/크으으.jpeg" />
          </div>
          <div className="product">
            <div>
              <h3>The Monthly</h3>
              <p>
                <em>The Monthly</em> publishes long-form journalism from the
                nation's leading writers and thinkers, covering Australian
                politics, culture and ideas.
              </p>
              <a href="#">Learn more</a>
              <a href="#">Advertise</a>
            </div>
            <img src="./feature/크으으.jpeg" />
          </div>
          <div className="product">
            <div>
              <h3>The Saturday Paper</h3>
              <p>
                <em>The Saturday Paper</em> is a weekly newspaper, dedicated to
                telling the whole story. It publishes long-form accounts of the
                week’s key stories.
              </p>
              <a href="#">Learn more</a>
              <a href="#">Advertise</a>
            </div>
            <img src="./feature/크으으.jpeg" />
          </div>
          <div className="product">
            <div>
              <h3>7am</h3>
              <p>
                <em>7am</em> is a daily news podcast that tells the big stories
                through in-depth interviews and sharp analysis.
              </p>
              <a href="#">Learn more</a>
              <a href="#">Advertise</a>
            </div>
            <img src="./feature/크으으.jpeg" />
          </div>
          <div className="line">
            <div className="product">
              <div>
                <h3>Quarterly Essay</h3>
                <img src="./feature/크으으.jpeg" />
                <p>
                  Quarterly Essay is the leading agenda-setting journal of
                  politics and culture in Australia.
                </p>
                <a href="#">Learn more</a>
                <a href="#">Advertise</a>
              </div>
              <div>
                <h3>Australian Foreign Affairs</h3>
                <img src="./feature/크으으.jpeg" />
                <p>
                  Australian Foreign Affairs is the country’s leading foreign
                  affairs journal.
                </p>
                <a href="#">Learn more</a>
                <a href="#">Advertise</a>
              </div>
            </div>
          </div>
          <div className="product">
            <div>
              <h3>Advertise</h3>
              <p>Get in touch with our advertising team.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className="line">
            <div className="product">
              <div>
                <h3>Shop</h3>
                <img src="./feature/크으으.jpeg" />
                <p>
                  In collaboration with Alpha60, <em>The Saturday Paper</em> and
                  <em>The Monthly</em> bring you a tote bag.
                </p>
                <a href="#">Shop now</a>
              </div>
              <div>
                <h3>Give a Gift</h3>
                <img src="./feature/크으으.jpeg" />
                <p>Give The Saturday Paper or The Monthly as a gift.</p>
                <a href="#">Gift</a>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="link">
            <h3>Careers</h3>
            <p>Work at the country’s leading independent publisher.</p>
            <a href="#">Learn more</a>
          </div>
          <div className="link">
            <h3>News</h3>
            <p>Keep in touch with what is happening at Schwartz Media.</p>
            <a href="#">Learn more</a>
          </div>
          <div className="link">
            <h3>Contact</h3>
            <p>Get in touch with our editorial and advertising teams.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <div className="footer__logo">Schwartz</div>
          <div>
            <span>
              Terms & Conditions <br />
              Privacy Policy
            </span>
            <span>
              © 2022 Schwartz Publishing
              <br />
              All rights reserved
            </span>
          </div>
        </div>
        <div>
          <span>Schwartz Media</span> <span>Schwartz Books</span>
        </div>
      </footer>
    </>
  );
}
