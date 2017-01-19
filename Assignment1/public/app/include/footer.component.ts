import { Component } from '@angular/core';
@Component({
  selector: 'my-footer',
  template: `
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Copyright &copy; Junyeong Yu 2017. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
`
})
export class FooterComponent {
}