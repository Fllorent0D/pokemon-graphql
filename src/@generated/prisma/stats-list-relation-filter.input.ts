import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereInput } from '../stats/stats-where.input';

@InputType()
export class StatsListRelationFilter {

    @Field(() => statsWhereInput, {nullable:true})
    every?: statsWhereInput;

    @Field(() => statsWhereInput, {nullable:true})
    some?: statsWhereInput;

    @Field(() => statsWhereInput, {nullable:true})
    none?: statsWhereInput;
}
