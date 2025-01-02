import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyComponent } from './body.component';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule for routing-related tests
import { By } from '@angular/platform-browser';

describe('BodyComponent', () => {
    let component: BodyComponent;
    let fixture: ComponentFixture<BodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BodyComponent],  // Declare the BodyComponent for testing
            imports: [RouterTestingModule]  // Include RouterTestingModule for routing functionality if needed
        })
            .compileComponents();  // Compile the components and templates
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();  // Trigger change detection to ensure the component is initialized
    });

    it('should create the BodyComponent', () => {
        expect(component).toBeTruthy();  // Test to ensure the component is created successfully
    });

    it('should display the heading "Welcome to Our Website"', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Our Website');
    });

    it('should contain three cards', () => {
        const compiled = fixture.nativeElement;
        const cards = compiled.querySelectorAll('.card');
        expect(cards.length).toBe(3);  // Test to check if there are exactly three cards in the component
    });

    it('should have a button that links to the About page', () => {
        const compiled = fixture.nativeElement;
        const button = compiled.querySelector('button[routerLink="/about"]');
        expect(button).toBeTruthy();  // Check if the "About" button is present and has the correct routerLink
    });
});
