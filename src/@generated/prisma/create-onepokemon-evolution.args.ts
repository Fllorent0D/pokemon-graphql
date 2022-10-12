import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionCreateInput } from '../pokemon-evolution/pokemon-evolution-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonEvolutionArgs {

    @Field(() => pokemon_evolutionCreateInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateInput)
    data!: pokemon_evolutionCreateInput;
}
