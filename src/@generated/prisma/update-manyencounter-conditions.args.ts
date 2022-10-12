import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsUpdateManyMutationInput } from '../encounter-conditions/encounter-conditions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_conditionsWhereInput } from '../encounter-conditions/encounter-conditions-where.input';

@ArgsType()
export class UpdateManyencounterConditionsArgs {

    @Field(() => encounter_conditionsUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_conditionsUpdateManyMutationInput)
    data!: encounter_conditionsUpdateManyMutationInput;

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    @Type(() => encounter_conditionsWhereInput)
    where?: encounter_conditionsWhereInput;
}
