import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsUpdateManyMutationInput } from '../encounter-slots/encounter-slots-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';

@ArgsType()
export class UpdateManyencounterSlotsArgs {

    @Field(() => encounter_slotsUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_slotsUpdateManyMutationInput)
    data!: encounter_slotsUpdateManyMutationInput;

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    @Type(() => encounter_slotsWhereInput)
    where?: encounter_slotsWhereInput;
}
