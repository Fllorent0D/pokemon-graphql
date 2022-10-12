import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsWhereInput } from '../pokemon-stats/pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { pokemon_statsOrderByWithRelationInput } from '../pokemon-stats/pokemon-stats-order-by-with-relation.input';
import { pokemon_statsWhereUniqueInput } from '../pokemon-stats/pokemon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_statsScalarFieldEnum } from './pokemon-stats-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonStatsArgs {

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_statsWhereInput)
    where?: pokemon_statsWhereInput;

    @Field(() => [pokemon_statsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_statsOrderByWithRelationInput>;

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_statsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_statsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_statsScalarFieldEnum>;
}
