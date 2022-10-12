import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesOrderByWithRelationInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-order-by-with-relation.input';
import { pokeathlon_stat_namesWhereUniqueInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereInput)
    where?: pokeathlon_stat_namesWhereInput;

    @Field(() => [pokeathlon_stat_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokeathlon_stat_namesOrderByWithRelationInput>;

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:true})
    cursor?: pokeathlon_stat_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
