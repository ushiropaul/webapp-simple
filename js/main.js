const supabaseUrl = 'https://tbdsqdyvxueryctivajr.supabase.co'; // Reemplazar
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZHNxZHl2eHVlcnljdGl2YWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzc0MTIsImV4cCI6MjA2MzYxMzQxMn0.k_yFkt2VAEj6WyfiwPFrwF59IFJDzFwFA_P33KgSsuA'; // Reemplazar
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function cargarAlumnos() {
  const { data, error } = await supabase.from('alumnos').select('*');
  if (error) return console.error(error);
  document.getElementById('lista').innerHTML = data
    .map(a => `<li>${a.nombre} ${a.apellido}</li>`)
    .join('');
}

async function agregarAlumno() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const { error } = await supabase.from('alumnos').insert([{ nombre, apellido }]);
  if (error) return console.error(error);
  cargarAlumnos();
}

cargarAlumnos();
