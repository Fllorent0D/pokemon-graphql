import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsWhereInput } from '../encounter-methods/encounter-methods-where.input';
import { Type } from 'class-transformer';
import { encounter_methodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';
import { encounter_methodsWhereUniqueInput } from '../encounter-methods/encounter-methods-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateencounterMethodsArgs {

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    @Type(() => encounter_methodsWhereInput)
    where?: encounter_methodsWhereInput;

    @Field(() => [encounter_methodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_methodsOrderByWithRelationInput>;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:true})
    cursor?: encounter_methodsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
