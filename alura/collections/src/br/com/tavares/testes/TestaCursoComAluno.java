package br.com.tavares.testes;

import br.com.tavares.modelos.Aluno;
import br.com.tavares.modelos.Aula;
import br.com.tavares.modelos.Curso;

public class TestaCursoComAluno {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


		Curso javaColecoes = new Curso("Dominando as coleções do Java", "Paulo Silveira");
		
		javaColecoes.adiciona(new Aula("Trabalhando com ArrayList", 21));
		javaColecoes.adiciona(new Aula("Criando uma Aula", 20));
		javaColecoes.adiciona(new Aula("Relacionamento com coleções", 24));
		
		Aluno a1 = new Aluno("Rodrigo Turini", 341672);
		Aluno a2 = new Aluno("Guilherme Silveira", 5617);
		Aluno a3 = new Aluno("Mauricio Aniche", 17645);
		
		javaColecoes.matricula(a1);
		javaColecoes.matricula(a2);
		javaColecoes.matricula(a3);
		
		System.out.println("Todos os alunos matriculados:");
		javaColecoes.getAlunos().forEach(aluno -> {
			System.out.println(aluno);
		});
		
		System.out.println("O aluno " + a1 + " está matriculado?");
		System.out.println(javaColecoes.estaMatriculado(a1));
		
		
	}

}
