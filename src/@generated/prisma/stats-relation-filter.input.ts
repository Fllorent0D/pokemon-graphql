import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereInput } from '../stats/stats-where.input';

@InputType()
export class StatsRelationFilter {

    @Field(() => statsWhereInput, {nullable:true})
    is?: statsWhereInput;

    @Field(() => statsWhereInput, {nullable:true})
    isNot?: statsWhereInput;
}
