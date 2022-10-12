import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsUpdateInput } from '../encounter-conditions/encounter-conditions-update.input';
import { Type } from 'class-transformer';
import { encounter_conditionsWhereUniqueInput } from '../encounter-conditions/encounter-conditions-where-unique.input';

@ArgsType()
export class UpdateOneencounterConditionsArgs {

    @Field(() => encounter_conditionsUpdateInput, {nullable:false})
    @Type(() => encounter_conditionsUpdateInput)
    data!: encounter_conditionsUpdateInput;

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_conditionsWhereUniqueInput)
    where!: encounter_conditionsWhereUniqueInput;
}
