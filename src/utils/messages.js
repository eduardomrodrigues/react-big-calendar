let defaultMessages = {
  date: 'Data',
  time: 'Tempo',
  event: 'Evento',
  allDay: 'Todos os Dias',
  week: 'Semana',
  work_week: 'Semana Útil',
  day: 'Dia',
  month: 'Mês',
  previous: 'Voltar',
  next: 'Próximo',
  yesterday: 'Ontem',
  tomorrow: 'Amanhã',
  today: 'Hoje',
  agenda: 'Agenda',

  noEventsInRange: 'Não há eventos nesse prazo',

  showMore: total => `+${total} more`,
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}
