import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_condition_value_proseUncheckedCreateNestedManyWithoutEncounter_condition_valuesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-unchecked-create-nested-many-without-encounter-condition-values.input';

@InputType()
export class encounter_condition_valuesUncheckedCreateWithoutEncounter_condition_value_mapInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => encounter_condition_value_proseUncheckedCreateNestedManyWithoutEncounter_condition_valuesInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUncheckedCreateNestedManyWithoutEncounter_condition_valuesInput;
}
