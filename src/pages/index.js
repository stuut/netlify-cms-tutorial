import React from "react"

export default () => <div>Hello world!</div>

<script src="https://code.jquery.com/jquery-1.11.2.js"></script>

  <!-- Make sure to include Nelify's authentiation library -->
  <!-- Also available via npm as netlify-auth-providers -->
  <script src="https://unpkg.com/netlify-auth-providers"></script>

  <script>
    $(function() {
      $("#login").on("click", function(e) {
        e.preventDefault();
        var authenticator = new netlify.default ({});
        authenticator.authenticate({provider:"github", scope: "user"}, function(err, data) {
          if (err) {
            return $("#output").text("Error Authenticating with GitHub: " + err);
          }
          $("#output").text("Authenticated with GitHub. Access Token: " + data.token);
        });
      });
    });
  </script>
