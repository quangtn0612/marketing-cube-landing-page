import React from "react";
import gallery1 from "../gallery1.jpeg";
import gallery2 from "../gallery2.jpeg";
import gallery3 from "../gallery3.jpeg";
import "./Blog.css";
function Blog() {
  return (
    <div class="container p-3 my-3 aaaa">
      <h1 class="blog-title">Blog</h1>
      <div class="aa">
        <div class="blog">
          <a
            href="https://marketingcube.com.au/2020/05/welcome-to-blocks-the-latest-innovation-from-oracle-eloqua/#.YTcaiZ6mMeY"
            target="_blank"
          >
            <div class="overflo">
              <img
                src={gallery1}
                alt="Children with teacher"
                width="330"
                height="200"
                class="zoomPic"
              />
            </div>
          </a>
          <p class="characterBlog">
            <a
              href="https://marketingcube.com.au/2020/05/welcome-to-blocks-the-latest-innovation-from-oracle-eloqua/#.YTcaiZ6mMeY"
              target="_blank"
            >
              Welcome to Blocks
            </a>
          </p>
        </div>
        <div class="blog">
          <a
            href="https://marketingcube.com.au/2019/06/innovation-delivered-today-and-theres-more-to-come/#.YTcaiZ6mMeY"
            target="_blank"
          >
            <div class="overflo">
              <img
                src={gallery2}
                alt="Child playing cars"
                width="330"
                height="200"
                class="zoomPic"
              />
            </div>
          </a>
          <p class="characterBlog">
            <a
              href="https://marketingcube.com.au/2019/06/innovation-delivered-today-and-theres-more-to-come/#.YTcaiZ6mMeY"
              target="_blank"
            >
              Innovation delivered today
            </a>
          </p>
        </div>
        <div class="blog">
          <a
            href="https://marketingcube.com.au/2018/05/the-new-eloqua-email-design-editor-a-hands-on-tour/#.YTcaip6mMeY"
            target="_blank"
          >
            <div class="overflo">
              <img
                src={gallery3}
                alt="class time"
                width="330"
                height="200"
                class="zoomPic"
              />
            </div>
          </a>
          <p class="characterBlog">
            <a
              href="https://marketingcube.com.au/2018/05/the-new-eloqua-email-design-editor-a-hands-on-tour/#.YTcaip6mMeY"
              target="_blank"
            >
              The new Eloqua Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
