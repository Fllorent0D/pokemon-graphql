import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from '../pokemon-evolution/pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonEvolutionArgs {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;
}
