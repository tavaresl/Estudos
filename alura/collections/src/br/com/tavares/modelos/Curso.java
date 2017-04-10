package br.com.tavares.modelos;

import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Curso {

	private String nome;
	private String nomeInstrutor;
	private List<Aula> aulas = new LinkedList<Aula>();
	private Set<Aluno> alunos = new HashSet<Aluno>();
	
	public Curso(String nome, String nomeInstrutor) {
		this.nome = nome;
		this.nomeInstrutor = nomeInstrutor;
	}
	
	public String getNome() {
		return nome;
	}
	
	public String getNomeInstrutor() {
		return nomeInstrutor;
	}
	
	public List<Aula> getAulas() {
		return Collections.unmodifiableList(aulas);
	}
	
	public void adiciona(Aula aula) {
		this.aulas.add(aula);
	}
	
	public int getTempoTotal() {
		return this.aulas
					.stream()
					.mapToInt(Aula::getTempo)
					.sum();
	}
	
	public Set<Aluno> getAlunos() {
		return Collections.unmodifiableSet(alunos);
	}

	public void matricula(Aluno aluno) {
		this.alunos.add(aluno);
	}
	
	@Override
	public String toString() {
		return "[Curso: " + nome + ", tempo total: " + getTempoTotal() + ", aulas: " + aulas + "]";
	}
	
	public boolean estaMatriculado(Aluno aluno) {
		return this.alunos.contains(aluno);
	}
	
}
