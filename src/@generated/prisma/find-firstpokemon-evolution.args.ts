import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionWhereInput } from '../pokemon-evolution/pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionOrderByWithRelationInput } from '../pokemon-evolution/pokemon-evolution-order-by-with-relation.input';
import { pokemon_evolutionWhereUniqueInput } from '../pokemon-evolution/pokemon-evolution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_evolutionScalarFieldEnum } from './pokemon-evolution-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonEvolutionArgs {

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    @Type(() => pokemon_evolutionWhereInput)
    where?: pokemon_evolutionWhereInput;

    @Field(() => [pokemon_evolutionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_evolutionOrderByWithRelationInput>;

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:true})
    cursor?: pokemon_evolutionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_evolutionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_evolutionScalarFieldEnum>;
}
