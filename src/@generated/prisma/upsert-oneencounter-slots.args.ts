import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from '../encounter-slots/encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateInput } from '../encounter-slots/encounter-slots-create.input';
import { encounter_slotsUpdateInput } from '../encounter-slots/encounter-slots-update.input';

@ArgsType()
export class UpsertOneencounterSlotsArgs {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsCreateInput, {nullable:false})
    @Type(() => encounter_slotsCreateInput)
    create!: encounter_slotsCreateInput;

    @Field(() => encounter_slotsUpdateInput, {nullable:false})
    @Type(() => encounter_slotsUpdateInput)
    update!: encounter_slotsUpdateInput;
}
