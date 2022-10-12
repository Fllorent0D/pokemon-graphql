import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionUpdateInput } from '../pokemon-evolution/pokemon-evolution-update.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionWhereUniqueInput } from '../pokemon-evolution/pokemon-evolution-where-unique.input';

@ArgsType()
export class UpdateOnepokemonEvolutionArgs {

    @Field(() => pokemon_evolutionUpdateInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateInput)
    data!: pokemon_evolutionUpdateInput;

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;
}
