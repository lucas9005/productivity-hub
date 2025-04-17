import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

async function setup() {
  await render(AppComponent, {
    imports: [MatCardModule, MatButtonModule, MatSlideToggleModule],
  });
}

describe('AppComponent', () => {
  it('should render the material card with content', async () => {
    await setup();

    // Heading elements
    expect(screen.getByText(/Angular Material is working!/i)).toBeInTheDocument();
    expect(screen.getByText(/Now with animations/i)).toBeInTheDocument();

    // Button
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();

    // Toggle
    const toggle = screen.getByRole('switch', { name: /Toggle me/i });
    expect(toggle).toBeInTheDocument();
  });
});
