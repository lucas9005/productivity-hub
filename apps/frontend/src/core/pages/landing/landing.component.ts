import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { FeatureCard } from '@shared/models/feature-card.model';

/**
 * Public main landing page component.
 *
 * Serves as the entry screen of the application when accessed at the root route (`'/'`).
 * Displays the app introduction and visually highlights the five app features.
 *
 * @example
 * <app-landing></app-landing>
 */
@Component({
	selector: 'app-landing',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink, FooterComponent],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss'
})
export class LandingComponent {
	/**
	 * List of feature cards displayed in the UI.
	 */
	public readonly featureCards: readonly FeatureCard[] = [
		{
			title: 'Task Manager',
			icon: 'task',
			label: 'Task Manager icon',
			src: 'assets/images/features/task.png',
			alt: 'Task Manager illustration',
			content: 'Create tasks, set priorities and deadlines, and organize them using filters and categories. Stay productive with a focused, structured task management designed for everyday use.',
			className: 'task'
		},
		{
			title: 'Finance Tracker',
			icon: 'attach_money',
			label: 'Finance Tracker icon',
			src: 'assets/images/features/finance.png',
			alt: 'Finance Tracker illustration',
			content: 'Monitor income and expenses, set monthly budgets, and visualize your financial activity with dynamic charts. Gain insights into your spending habits to make smarter money decisions.',
			className: 'finance'
		},
		{
			title: 'Recipe Book',
			icon: 'restaurant',
			label: 'Recipe Book icon',
			src: 'assets/images/features/recipe.png',
			alt: 'Recipe Book illustration',
			content: 'Organize your personal recipes with ingredients, instructions, and tags. Access them quickly while cooking, and share select recipes with others when needed.',
			className: 'recipe'
		},
		{
			title: 'Travel Planner',
			icon: 'flight',
			label: 'Travel Planner icon',
			src: 'assets/images/features/travel.png',
			alt: 'Travel Planner illustration',
			content: 'Plan upcoming trips with detailed itineraries, reservations, and notes. Keep your travel information centralized and accessible for smooth, stress-free experiences.',
			className: 'travel'
		},
		{
			title: 'Real-time Chat',
			icon: 'chat',
			label: 'Real-time Chat icon',
			src: 'assets/images/features/chat.png',
			alt: 'Real-time Chat illustration',
			content: 'Connect with friends and family through responsive, real-time messaging. Keep all your conversations in one place, organized and easy to follow.',
			className: 'chat'
		}
	];
}
