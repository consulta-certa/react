function QuemSomos() {
  return (
    <main>
      <h1>Quem somos</h1>

      <section className="bloco">
        <section className="texto-quem">
          <h2>O que é o Consulta Certa?</h2>
          <p>
            Consulta Certa é um site feito por alunos da FIAP do curso de ADS para o projeto Challenge,
            com intenção de resolver um desafio dado pelo Hospital das Clínicas.
          </p>
        </section>
        <video src="#" controls />
      </section>

      <section className="bloco">
        <section className="texto-objetivo">
          <h2>Nosso objetivo</h2>
          <p>
            Nosso objetivo é guiar os pacientes pelo Portal do Paciente e garantir que eles realizem suas
            teleconsultas sem mistério.
          </p>
        </section>

        <figure>
          <img src="../assets/images/arrow.png" alt="Seta" />
        </figure>

        <div className="linha-azul"></div>

        <figure>
          <img src="../assets/images/icon_graph.png" alt="Ícone gráfico" />
          <img src="../assets/images/icon_acessibility.png" alt="Ícone acessibilidade" />
          <img src="../assets/images/icon_quality.png" alt="Ícone qualidade" />
          <img src="../assets/images/icon_seta.png" alt="Ícone seta" />
        </figure>

        <div className="linha-azul"></div>
      </section>

      <section>
        <section className="texto-desenvolvedores">
          <h2>Desenvolvedores</h2>
          <p>
            Somos alunos da FIAP, engajados em desenvolver soluções acessíveis para a saúde pública digital.
          </p>
        </section>

        <ul className="desenvolvedores">
          <li>
            <img src="../assets/images/FelipeFerrete.jpeg" alt="Foto do Felipe Ferrete" />
            <section>
              <h3>Felipe Ferrete Soares Lemes</h3>
              <p>Turma: 1TDSPF</p>
              <p>RM: 562999</p>
              <section>
                <a href="https://github.com/FelipeFerrete" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/felipe-ferrete-ab63a318a/" target="_blank">LinkedIn</a>
              </section>
            </section>
          </li>

          <li>
            <img src="../assets/images/GustavoBosak.jpeg" alt="Foto do Gustavo Bosak" />
            <section>
              <h3>Gustavo Bosak Santos</h3>
              <p>Turma: 1TDSPF</p>
              <p>RM: 566315</p>
              <section>
                <a href="https://github.com/Gustavo-Bosak" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/gustavo-bosak-santos/" target="_blank">LinkedIn</a>
              </section>
            </section>
          </li>

          <li>
            <img src="../assets/images/NikolasBrisola.jpeg" alt="Foto do Nikolas Brisola" />
            <section>
              <h3>Nikolas Henrique de Souza Lemes Brisola</h3>
              <p>Turma: 1TDSPF</p>
              <p>RM: 564371</p>
              <section>
                <a href="https://github.com/NikolasBrisola" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/nikolas-brisola-ab3588353/" target="_blank">LinkedIn</a>
              </section>
            </section>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default QuemSomos;
