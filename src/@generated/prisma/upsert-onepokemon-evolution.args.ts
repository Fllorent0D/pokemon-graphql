import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from '../pokemon-evolution/pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateInput } from '../pokemon-evolution/pokemon-evolution-create.input';
import { pokemon_evolutionUpdateInput } from '../pokemon-evolution/pokemon-evolution-update.input';

@ArgsType()
export class UpsertOnepokemonEvolutionArgs {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateInput)
    create!: pokemon_evolutionCreateInput;

    @Field(() => pokemon_evolutionUpdateInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateInput)
    update!: pokemon_evolutionUpdateInput;
}
