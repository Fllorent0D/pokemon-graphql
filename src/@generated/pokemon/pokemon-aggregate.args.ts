import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { pokemonOrderByWithRelationInput } from './pokemon-order-by-with-relation.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class pokemonAggregateArgs {

    @Field(() => pokemonWhereInput, {nullable:true})
    @Type(() => pokemonWhereInput)
    where?: pokemonWhereInput;

    @Field(() => [pokemonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemonOrderByWithRelationInput>;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    cursor?: pokemonWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
