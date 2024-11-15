export default function Profesor() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-white shadow p-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard de Administración del Profesor</h1>
            </header>
            <main className="space-y-6">
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Estadísticas</h2>
                    <p className="text-gray-600">Visualiza las estadísticas de tus cursos y estudiantes.</p>
                    {/* Aquí puedes agregar gráficos y estadísticas */}
                </section>
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Gestión de Cursos</h2>
                    <p className="text-gray-600">Administra tus cursos aquí.</p>
                    {/* Aquí puedes agregar una lista de cursos y opciones para editarlos */}
                </section>
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Perfil del Profesor</h2>
                    <p className="text-gray-600">Actualiza tu información personal.</p>
                    {/* Aquí puedes agregar un formulario para actualizar el perfil */}
                </section>
            </main>
            <footer className="mt-6 text-center text-gray-600">
                <p>© 2023 Dashboard de Administración del Profesor</p>
            </footer>
        </div>
    );
}