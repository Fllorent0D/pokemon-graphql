import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseWhereInput } from '../encounter-method-prose/encounter-method-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_method_proseOrderByWithRelationInput } from '../encounter-method-prose/encounter-method-prose-order-by-with-relation.input';
import { encounter_method_proseWhereUniqueInput } from '../encounter-method-prose/encounter-method-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Encounter_method_proseScalarFieldEnum } from './encounter-method-prose-scalar-field.enum';

@ArgsType()
export class FindFirstencounterMethodProseArgs {

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    @Type(() => encounter_method_proseWhereInput)
    where?: encounter_method_proseWhereInput;

    @Field(() => [encounter_method_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_method_proseOrderByWithRelationInput>;

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:true})
    cursor?: encounter_method_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Encounter_method_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Encounter_method_proseScalarFieldEnum>;
}
