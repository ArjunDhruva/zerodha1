import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../home/Hero";

//test suite
describe('Hero Component', ()=>{
    test('renders hero image', ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test('renders submit button', ()=>{
        render(<Hero/>);
        const CTAbutton = screen.getByRole('button');
        expect(CTAbutton).toBeInTheDocument();
        expect(CTAbutton).toHaveClass('cta-btn');
    });
});