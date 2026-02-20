from manim import *
from manim_slides import Slide

class MateuszIntro(Slide):
    def construct(self):
        colors = ["#13293D", "#006494", "#247BA0", "#1B98E0", "#E8F1F2"]  # Lista kolorów dla kół

        g = VGroup()  # Grupa, do której będziemy dodawać kółka

        for i in range(5):  # Tworzy 5 kółek, każde kolejne mniejsze
            d = Dot(color=colors[i], sheen_factor=-0.25).scale(30 - i * 4)  # Kółko z odpowiednim kolorem i rozmiarem
            g.add(d)  # Dodaj kółko do grupy
            self.play(Write(d), run_time=0.5)  # Animuj pojawienie się każdego kółka

        t = Text("Mateusz", font_size=120).set_color(WHITE)  # Tekst do wyświetlenia

        self.wait(0.2)  # Krótkie zatrzymanie animacji
        # self.pause() # (Opcjonalne) Ręczna pauza po kółkach

        self.play(ReplacementTransform(g, t))  # Zamiana wszystkich kółek w napis "Mateusz"

        self.wait(0.5)  # Krótkie zatrzymanie
        self.pause()  # Pauza - kontrola dalszej prezentacji przez kliknięcie lub strzałkę