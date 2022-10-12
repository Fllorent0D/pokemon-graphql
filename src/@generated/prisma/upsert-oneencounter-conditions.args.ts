import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsWhereUniqueInput } from '../encounter-conditions/encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateInput } from '../encounter-conditions/encounter-conditions-create.input';
import { encounter_conditionsUpdateInput } from '../encounter-conditions/encounter-conditions-update.input';

@ArgsType()
export class UpsertOneencounterConditionsArgs {

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_conditionsWhereUniqueInput)
    where!: encounter_conditionsWhereUniqueInput;

    @Field(() => encounter_conditionsCreateInput, {nullable:false})
    @Type(() => encounter_conditionsCreateInput)
    create!: encounter_conditionsCreateInput;

    @Field(() => encounter_conditionsUpdateInput, {nullable:false})
    @Type(() => encounter_conditionsUpdateInput)
    update!: encounter_conditionsUpdateInput;
}
