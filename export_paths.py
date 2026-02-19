from manim import *

class ExportShapes(Scene):
    def construct(self):
        circle = Circle()
        star = Star(n=5, inner_radius=0.5)
        
        # Zamiast prosić o tekst, po prostu dodajemy je do sceny
        self.add(circle, star)
