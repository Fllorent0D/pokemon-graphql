import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesOrderByWithRelationInput } from '../pokemon-abilities/pokemon-abilities-order-by-with-relation.input';
import { pokemon_abilitiesWhereUniqueInput } from '../pokemon-abilities/pokemon-abilities-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    @Type(() => pokemon_abilitiesWhereInput)
    where?: pokemon_abilitiesWhereInput;

    @Field(() => [pokemon_abilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_abilitiesOrderByWithRelationInput>;

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_abilitiesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
