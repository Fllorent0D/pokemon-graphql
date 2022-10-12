import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsWhereInput } from '../pokeathlon-stats/pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsOrderByWithRelationInput } from '../pokeathlon-stats/pokeathlon-stats-order-by-with-relation.input';
import { pokeathlon_statsWhereUniqueInput } from '../pokeathlon-stats/pokeathlon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokeathlonStatsArgs {

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereInput)
    where?: pokeathlon_statsWhereInput;

    @Field(() => [pokeathlon_statsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokeathlon_statsOrderByWithRelationInput>;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:true})
    cursor?: pokeathlon_statsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
