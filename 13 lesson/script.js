// greeting
{
    const name = prompt("enter your name");
    alert(`Hello ${name}`);
}
// gopni4ek
{
    const text = prompt('enter your text').split(",").join(" блін,");
    alert(text);
}
// capitalize
{
    const str = "cANBerRa";
    const result = str.toLowerCase();
    console.log(result.charAt(0).toUpperCase() + result.slice(1)); //Canberra
}
// word count
{
    const str = prompt("enter your sentence");
    console.log(str.trim().split(' ').length);
}
// credentials
{
    const firstName =  prompt("enter your first name");
    const lastName =  prompt("enter your last name");
    const patronymic =  prompt("enter your patronymic");
    fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + " " +
               (lastName.charAt(0).toUpperCase() + lastName.slice(1)) + " " +
               (patronymic.charAt(0).toUpperCase() + patronymic.slice(1));
    console.log(fullName);
}
// beer
{
    const str = "Було жарко. Василь пив пиво вприкуску з креветками"
    const result = str.replace("пиво", "чай")
    console.log(result); //"Було жарко. Василь пив чай уприкуску з креветками"
}
// no tag
{
    const str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    const firstIndex = str.indexOf("<");
    const lastIndex = str.indexOf(">");
    const result = ((str.slice("", firstIndex -1)) + (str.slice(lastIndex + 1)));
    console.log(result); //якийсь текст, в якому є один тег і всяке інше
}
// big tag
{
    const str = "якийсь текст у якому є один тег <br /> і всяке інше";
    const firstIndex = str.indexOf("<");
    const lastIndex = str.indexOf(">");
    const result = ((str.slice("", firstIndex -1)) + (str.slice(firstIndex -1, lastIndex +1).toUpperCase()) + (str.slice(lastIndex + 1)));
    console.log(result); //якийсь текст, в якому є один тег <BR /> і всяке інше
}
// new line
{
    const text = prompt('enter your text').split("\\n").join("\n");
    console.log(text);
}
// youtube
{
    const regex =/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
    const link = prompt("Enter youtube link");
    const result = link.match(regex);
    const id = result[1];
    const video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=Nk_CZTE3z3VlpW1i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    document.write(video);
}
