import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseWhereInput } from '../pokedex-prose/pokedex-prose-where.input';
import { Type } from 'class-transformer';
import { pokedex_proseOrderByWithRelationInput } from '../pokedex-prose/pokedex-prose-order-by-with-relation.input';
import { pokedex_proseWhereUniqueInput } from '../pokedex-prose/pokedex-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokedexProseArgs {

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    @Type(() => pokedex_proseWhereInput)
    where?: pokedex_proseWhereInput;

    @Field(() => [pokedex_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokedex_proseOrderByWithRelationInput>;

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:true})
    cursor?: pokedex_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
