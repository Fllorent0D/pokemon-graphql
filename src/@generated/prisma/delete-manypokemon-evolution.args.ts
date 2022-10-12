import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionWhereInput } from '../pokemon-evolution/pokemon-evolution-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonEvolutionArgs {

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    @Type(() => pokemon_evolutionWhereInput)
    where?: pokemon_evolutionWhereInput;
}
