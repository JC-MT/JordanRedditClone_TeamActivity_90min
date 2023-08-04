import './Feed.scss';

export default function Feed() {
  return (
    <div class="containerFeed">
      <div class="newsFeed">
        <div class="newsFeed__dropDownButtons">
          <div class="newsFeed__hotButton">Hot v</div>
          <div class="newsFeed__everyWhereButton">EveryWhere v</div>
          <div class="newsFeed__line"></div>
          <div class="newsFeed__box">
            <svg
              rpl=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="16"
              width="16"
              icon-name="view-card-outline"
              fill="currentColor"
            >
              <path d="M17.882 1H2.118A1.12 1.12 0 001 2.119v15.762A1.119 1.119 0 002.118 19h15.764A1.12 1.12 0 0019 17.881V2.119A1.12 1.12 0 0017.882 1zm-.132 16.75H2.25v-7.138h15.5v7.138zM2.25 9.362V2.25h15.5v7.112H2.25z"></path>
            </svg>
            <span> v </span>
          </div>
        </div>

        <div class="newsFeed__article">
          <div class="newsFeed__info">
            <img src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png" />
            <div class="newsFeed__author">u/UnawareMother2</div>
            <div class="newsFeed__time">.10 hour ago</div>

            <div class="newsFeed__ellipses">...</div>
          </div>

          <div class="newsFeed__content">
            Lorem ipsum lorem ipsum lorem ipsum
          </div>

          <div class="newsFeed__likeUnlike">
            <div class="newsFeed__downArrow"></div>
            {/* <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="downvote-outline" fill="currentColor"><!--?lit$010180107$--><g clip-path="url(#clip0_472_1137)"><path d="M10 20a1.122 1.122 0 01-.834-.372l-7.872-8.581A1.251 1.251 0 011.118 9.7 1.114 1.114 0 012.123 9H6V2.123A1.125 1.125 0 017.123 1h5.754A1.125 1.125 0 0114 2.123V9h3.874a1.114 1.114 0 011.007.7 1.25 1.25 0 01-.171 1.345l-7.876 8.589A1.128 1.128 0 0110 20zm-7.684-9.75L10 18.69l7.74-8.44h-4.99v-8h-5.5v8H2.316zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013z"></path></g><defs><clipPath id="clip0_472_1137"><path d="M0 0h20v20H0z"></path></clipPath></defs></svg> */}
          </div>
        </div>
        <div class="newsFeed__article">
          <div class="newsFeed__info">
            <img src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png" />
            <div class="newsFeed__author">u/UnawareMother2</div>
            <div class="newsFeed__time">.10 hour ago</div>

            <div class="newsFeed__ellipses">...</div>
          </div>

          <div class="newsFeed__content">
            Lorem ipsum lorem ipsum lorem ipsum
          </div>

          <div class="newsFeed__likeUnlike">
            <div class="newsFeed__downArrow"></div>
            {/* <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="downvote-outline" fill="currentColor"><!--?lit$010180107$--><g clip-path="url(#clip0_472_1137)"><path d="M10 20a1.122 1.122 0 01-.834-.372l-7.872-8.581A1.251 1.251 0 011.118 9.7 1.114 1.114 0 012.123 9H6V2.123A1.125 1.125 0 017.123 1h5.754A1.125 1.125 0 0114 2.123V9h3.874a1.114 1.114 0 011.007.7 1.25 1.25 0 01-.171 1.345l-7.876 8.589A1.128 1.128 0 0110 20zm-7.684-9.75L10 18.69l7.74-8.44h-4.99v-8h-5.5v8H2.316zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013z"></path></g><defs><clipPath id="clip0_472_1137"><path d="M0 0h20v20H0z"></path></clipPath></defs></svg> */}
          </div>
        </div>
        <div class="newsFeed__article">
          <div class="newsFeed__info">
            <img src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png" />
            <div class="newsFeed__author">u/UnawareMother2</div>
            <div class="newsFeed__time">.10 hour ago</div>

            <div class="newsFeed__ellipses">...</div>
          </div>

          <div class="newsFeed__content">
            Lorem ipsum lorem ipsum lorem ipsum
          </div>

          <div class="newsFeed__likeUnlike">
            <div class="newsFeed__downArrow"></div>
            {/* <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="downvote-outline" fill="currentColor"><!--?lit$010180107$--><g clip-path="url(#clip0_472_1137)"><path d="M10 20a1.122 1.122 0 01-.834-.372l-7.872-8.581A1.251 1.251 0 011.118 9.7 1.114 1.114 0 012.123 9H6V2.123A1.125 1.125 0 017.123 1h5.754A1.125 1.125 0 0114 2.123V9h3.874a1.114 1.114 0 011.007.7 1.25 1.25 0 01-.171 1.345l-7.876 8.589A1.128 1.128 0 0110 20zm-7.684-9.75L10 18.69l7.74-8.44h-4.99v-8h-5.5v8H2.316zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013z"></path></g><defs><clipPath id="clip0_472_1137"><path d="M0 0h20v20H0z"></path></clipPath></defs></svg> */}
          </div>
        </div>
      </div>
    </div>
  );
}
