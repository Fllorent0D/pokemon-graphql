import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsWhereInput } from '../encounter-conditions/encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { encounter_conditionsOrderByWithRelationInput } from '../encounter-conditions/encounter-conditions-order-by-with-relation.input';
import { encounter_conditionsWhereUniqueInput } from '../encounter-conditions/encounter-conditions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateencounterConditionsArgs {

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    @Type(() => encounter_conditionsWhereInput)
    where?: encounter_conditionsWhereInput;

    @Field(() => [encounter_conditionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_conditionsOrderByWithRelationInput>;

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:true})
    cursor?: encounter_conditionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
