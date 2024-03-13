import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModuloConsejeriasComponent } from './modulo-consejerias.component';

describe('ModuloConsejeriasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ModuloConsejeriasComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ModuloConsejeriasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Front'`, () => {
    const fixture = TestBed.createComponent(ModuloConsejeriasComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ModuloConsejeriasComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Front app is running!');
  });
});
