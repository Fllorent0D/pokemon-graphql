import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsUpdateInput } from '../encounter-slots/encounter-slots-update.input';
import { Type } from 'class-transformer';
import { encounter_slotsWhereUniqueInput } from '../encounter-slots/encounter-slots-where-unique.input';

@ArgsType()
export class UpdateOneencounterSlotsArgs {

    @Field(() => encounter_slotsUpdateInput, {nullable:false})
    @Type(() => encounter_slotsUpdateInput)
    data!: encounter_slotsUpdateInput;

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;
}
