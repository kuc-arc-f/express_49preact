//
export default function Compo(props: any) {
  return (
  <>
    <div class="flex flex-row">
      <div class="flex-1 p-2"><a href="/">[ home ]</a>
      </div>
      <div class="flex-1 text-right p-2">
        <a href="/about" class="ms-2" >[ about ]</a>
      </div>
    </div>
    <hr />
  </>
  );
}
/*
<a href="/">[ home ]</a>
<a href="/alert_dialog" class="ms-2" >[ AlertDialog ]</a>
<a href="/button" class="ms-2" >[ Button ]</a>
<a href="/card" class="ms-2" >[ Card ]</a>
<a href="/checkbox" class="ms-2" >[ CheckBox ]</a>
<a href="/input" class="ms-2" >[ input ]</a>
<a href="/navigation_menu" class="ms-2" >[ NavigationMenu ]</a>
<a href="/textarea" class="ms-2" >[ TextArea ]</a>
<a href="/radio" class="ms-2" >[ Radio ]</a>
<a href="/select" class="ms-2" >[ Select ]</a>
<hr />
*/
