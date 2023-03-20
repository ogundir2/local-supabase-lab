import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0";

const supabaseUrl = "https://onuotqlbyounlcpkikcv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udW90cWxieW91bmxjcGtpa2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzc4OTEsImV4cCI6MTk5MzcxMzg5MX0.gd3w6uoRMIom1djeTdkc2tPxekYMldOci2ytyvNkFAo";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: books, error } = await supabase.from("books").select("*");

  for (let book of books) {
    let booksTable = document.getElementById("books-table");

    booksTable.innerHTML += `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>${book.description}</td>
    </tr>`;
  }
}

getBooks();
