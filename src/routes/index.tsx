import { Title } from "solid-start";
import { createSignal, untrack } from "solid-js";
import "./index.css";

const transformer = (text: string) => {
  const uwu = text.replace(/(?:r|l)/g, "w");
  return uwu;
};

export default function Home() {
  const [state, setState] = createSignal<string>("enter text here");

  return (
    <main>
      <Title>Uwuify</Title>
      <div class="content">
        <h1>Uwuify</h1>
        <p>{transformer("Uwuifier transforms your text in uwu form.")}</p>
        <textarea
          class="normal-input"
          placeholder={untrack(state)}
          onInput={(x) => setState(x.currentTarget.value)}
        />

        <div class="transformed">
          <span>{transformer(state())}</span>
        </div>
      </div>
    </main>
  );
}
