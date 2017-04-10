package br.com.tavares.testes;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import br.com.tavares.modelos.Aula;
import br.com.tavares.modelos.Curso;

public class TestaCurso2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Curso javaColecoes = new Curso("Dominando as coleções do Java", "Paulo Silveira");
		
		javaColecoes.adiciona(new Aula("Trabalhando com ArrayList", 21));
		javaColecoes.adiciona(new Aula("Criando uma Aula", 20));
		javaColecoes.adiciona(new Aula("Relacionamento com coleções", 24));
		
		List<Aula> aulasImutaveis = javaColecoes.getAulas();
		List<Aula> aulas = new ArrayList<>(aulasImutaveis);
		
		Collections.sort(aulas);
		
		System.out.println(aulasImutaveis);
		System.out.println(aulas);
		System.out.println(javaColecoes.getTempoTotal());
		
		System.out.println(javaColecoes);
	}

}
