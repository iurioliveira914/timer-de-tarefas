// import { Header } from "../../components/Header";
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { FormContainer, HomeContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(event) {

  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormContainer>
              <label htmlFor="task">Vou trabalhar em</label>
              <TaskInput 
                id="task" 
                list='task-suggestions' 
                placeholder='Dê um nome para o seu projeto' 
                {...register('task')}
              />

              <datalist id='task-suggestions'>
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Banana" />
              </datalist>

              <label htmlFor="minutesAmount">Durante</label>
              <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder='00' 
                step={5} 
                min={5} 
                max={60} 
                {...register('minutesAmount', { valueAsNumber: true })}
              />

              <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
              <span>0</span>
              <span>0</span>
              <Separator>:</Separator>
              <span>0</span>
              <span>0</span>
          </CountdownContainer>

          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        </form>
      </HomeContainer>
  );
}
