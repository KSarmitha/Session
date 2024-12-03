import { Component } from '@angular/core';

@Component({
  selector: 'app-bulma',
  imports: [],
  template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEX///8B0bH29vYA0K4Azar2/fvC8ObX9e7N8urK8unp+fbj+PPx+/n6/v267uMq1LVJ2LyO49Ch59hu3seA4c041bhd2sGt6tyZ5dQAyqR34MtU2L3RmiAeAAAEkUlEQVR4nO3ci3qiMBCGYdhEVMQDnmrr/d/nyra2Hqtkvkln+8x/A/g+IQOGSYo/xa/Jn8IxNuMYq3GM1TjGahxjNY6xGsdYjWOsxjFW4xircYzVOMZqHGM1jrEax1iNY6zGMVbjGKtxTP9MpzmukgkzK0cZrpIHU4UQhvqXyYKpYihD1NfkwHSWMocmA+bdkkOjjzlaDhrtKqCOmYWj5aCZj1WvpY2ZlV+Wg2ZTaV5MGTObn1o6jebY6GIuLd2dpjhvVDFVeWnpNHo1TRMzDteWg0bvXUARM4q3LN3zZqJ0RT3MPYuiRg1z36J3p2lhbs8X5SqghLlVx840G40KrYOprp4vV5qFgkYF89iio9HAPGPp7jR83ihgRk9ZuipAV2geM3ww9080Zc1eGscMv63JF5rIamhMHwuugTH9LN2dRs4bFjN6er58asiahmLGT9axM82C05CY8aa/BdWAmCrJQmo4zLSNSRZQw2HqVdrAdJoNU9M4zGSbjDnUwIb4CRwmbfqjGg4zm6dbIA2HeUmd/x8a4B2awyxlGOJdAMMMWsGUedcspb8Bw9RvQkxcDqS/AcNM9jJMXMq/rmOYkaQyHyw7oFMAw1Q/Pi4kRlLMkHEBMZLHDDMuHEZUmXfiOvYeCiN4Z8YsGGaySMZgFgwzTKUEzsJhEud/BC0YZpyGQS0UZppWmWOLdghCmLTKHFtyXDBMk7IAQFsoTJ2wlsnOly4UJmFdlh4XDDPpP/9bZHXpLBCm/zuzgoXC9F3NCBoWCrPu+Y1pp2GhMD0XAMILcdGrMJhpL8ohmxlw1atAmL7zP6hoGEz/yhzmCn20DCZhNSPM+bFhMLuEd2aFsWEwSQsAvIbBJLxmamgYTOJ/ZrqbnsG8pmHonQ4IJuGdWWVsEIxgnRnVIJiUyqyhQTCCpVl0FwqCEX00BzUIRmQBNQQmYTXjUsP0OBOYkRRDjQ2BmUktlIbAiNsZSuhOIzCC3qwTzUI+NgRmAViQnQ7IbSZsAcI0yHNmTWmEfU3MXwBMIxubn1nRvJco01CfAVsEI9RwHRoGNFjvTGNAw/VoUprX1gCG0YTyJb2Lltyl0chrWtxKXmrQ/TNT4fMmhKXoIxS8TetN1A8ofXOmN9Ct0pfQ4lp6cXxrY+rYEH9ocMwgqQqE+Qq4Nr+Dtln3p4Q9shKosLe57qsJm5bZe6qx67ynJmwrqOtM5TyAuse8CeUO20Src1JD83RNOzxb7DWcXmTw3PMmvKI9NGpHtWyf0MSSPaxB7xCdx5q4ttnWeCPTB3eawulgimc1Db77BhXKNXzmRKF7ilbzdt+y12jSUj3frL6jCWX7Px1v9JHbmqgyLIX6mYA3NjyGoDMshf5pjc1lFYiLGd7PfIz6OZqDs+dNCGutY+eKLMe17r80Gh1zJ8lxkO5na23cqt1h/5IDMz1+J1QdliLTec1dFQjzrUpj9mnynKRdr8JC6dlymkxnnE92GU4Fz4XJE8dYjWOsxjFW4xircYzVOMZqHGM1jrEax1iNY6zGMVbjGKtxjNU4xmocYzWOsRrHWM3vwvwFXOYu8PGHJCkAAAAASUVORK5CYII="
            width="auto"
            height="auto"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Documentation </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class BulmaComponent {}
