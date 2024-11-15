import React from 'react';

export default function EstudiantesDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-500 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Dashboard de Estudiantes</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Welcome Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bienvenido/a</h2>
          <p>Consulta tu progreso, accede a tus cursos y gestiona tu información personal.</p>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cursos */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Cursos</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Curso 1: Introducción a React</li>
              <li>Curso 2: Algoritmos y estructuras de datos</li>
              <li>Curso 3: Desarrollo web avanzado</li>
            </ul>
          </div>

          {/* Próximos Eventos */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Próximos Eventos</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Examen: Lunes 20/11</li>
              <li>Entrega de proyecto: Viernes 24/11</li>
            </ul>
          </div>

          {/* Noticias */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Noticias</h3>
            <p>No hay noticias recientes.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 mt-6">
        <p className="text-sm">&copy; 2024 Dashboard de Estudiantes</p>
      </footer>
    </div>
  );
}
