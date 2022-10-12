import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';
import { Type } from 'class-transformer';
import { encounter_slotsOrderByWithRelationInput } from '../encounter-slots/encounter-slots-order-by-with-relation.input';
import { encounter_slotsWhereUniqueInput } from '../encounter-slots/encounter-slots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Encounter_slotsScalarFieldEnum } from './encounter-slots-scalar-field.enum';

@ArgsType()
export class FindFirstencounterSlotsArgs {

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    @Type(() => encounter_slotsWhereInput)
    where?: encounter_slotsWhereInput;

    @Field(() => [encounter_slotsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_slotsOrderByWithRelationInput>;

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:true})
    cursor?: encounter_slotsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Encounter_slotsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Encounter_slotsScalarFieldEnum>;
}
