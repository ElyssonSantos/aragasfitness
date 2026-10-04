export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Dicas para manter a disciplina na academia',
    category: 'Motivação',
    date: '24 ABR 2026',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Descubra como manter o foco e alcançar seus resultados sem desistir no meio do caminho.',
    author: 'Equipe Aragas',
    content: `
      <p>A disciplina é o fator mais importante para quem deseja alcançar resultados reais na academia. Muitas pessoas começam com entusiasmo, mas acabam desistindo após as primeiras semanas. Para evitar que isso aconteça com você, separamos 5 dicas fundamentais:</p>
      
      <h2>1. Defina metas reais e alcançáveis</h2>
      <p>Não tente mudar seu corpo do dia para a noite. Estabeleça pequenos objetivos mensais, como perder 2kg ou conseguir levantar um pouco mais de peso. Pequenas vitórias mantêm a motivação em alta.</p>

      <h2>2. Encontre um horário fixo</h2>
      <p>Crie uma rotina. Se você decidir que vai treinar todos os dias às 18h, trate isso como um compromisso inadiável. O corpo e a mente se acostumam com o hábito.</p>

      <h2>3. Tenha um parceiro de treino</h2>
      <p>Treinar com um amigo pode ser o incentivo que faltava naqueles dias em que a preguiça bate mais forte. Um motiva o outro.</p>

      <h2>4. Celebre o processo</h2>
      <p>Não foque apenas no objetivo final. Aprenda a gostar da sensação de dever cumprido após o treino. O bem-estar imediato é uma excelente recompensa.</p>

      <h2>5. Respeite o descanso</h2>
      <p>O overtraining (excesso de treino) pode levar à exaustão e à desmotivação. Entenda que os dias de descanso são tão importantes quanto os dias de treino para a construção muscular e a recuperação do corpo.</p>
    `
  },
  {
    id: 2,
    title: 'Alimentação e treino: a combinação perfeita',
    category: 'Nutrição',
    date: '18 ABR 2026',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Entenda por que a sua dieta é tão importante quanto o peso que você levanta.',
    author: 'Nutricionista Aragas',
    content: `
      <p>Muitos acreditam que apenas o treino pesado é suficiente para atingir o corpo dos sonhos. No entanto, a frase "os músculos são construídos na cozinha" nunca foi tão verdadeira. A alimentação e o treino andam de mãos dadas, e um não funciona bem sem o outro.</p>

      <h2>O Combustível para o Treino</h2>
      <p>A comida que você ingere antes do treino atua como combustível. Carboidratos complexos, como batata doce e aveia, fornecem energia gradual para que você consiga suportar treinos intensos sem fadiga precoce.</p>

      <h2>Recuperação e Construção Muscular</h2>
      <p>Após o treino, seus músculos estão lesionados e precisam se recuperar. É aí que entram as proteínas (ovos, frango, carne, whey protein). Elas fornecem os aminoácidos necessários para reparar as fibras musculares, tornando-as maiores e mais fortes.</p>

      <h2>Hidratação é Fundamental</h2>
      <p>A água compõe grande parte dos nossos músculos. A desidratação pode reduzir significativamente o desempenho e aumentar o risco de lesões. Beba água antes, durante e após o treino.</p>

      <p>Lembre-se sempre de consultar um profissional de nutrição para adequar a dieta às suas necessidades e objetivos específicos. Na Aragas Fitness, estamos sempre prontos para te orientar a buscar o melhor acompanhamento.</p>
    `
  }
];
