package br.com.tavares.testes;

import java.util.List;

import br.com.tavares.modelos.Aula;
import br.com.tavares.modelos.Curso;

public class TestaCurso {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Curso javaColecoes = new Curso("Dominando as coleções do Java", "Paulo Silveira");
		
		javaColecoes.adiciona(new Aula("Trabalhando com ArrayList", 21));
		javaColecoes.adiciona(new Aula("Criando uma Aula", 20));
		javaColecoes.adiciona(new Aula("Relacionamento com coleções", 24));
		
		List<Aula> aulas = javaColecoes.getAulas();
		
		System.out.println(aulas);
	}

}
