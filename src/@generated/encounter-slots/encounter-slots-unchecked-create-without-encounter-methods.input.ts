import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersUncheckedCreateNestedManyWithoutEncounter_slotsInput } from '../encounters/encounters-unchecked-create-nested-many-without-encounter-slots.input';

@InputType()
export class encounter_slotsUncheckedCreateWithoutEncounter_methodsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => encountersUncheckedCreateNestedManyWithoutEncounter_slotsInput, {nullable:true})
    encounters?: encountersUncheckedCreateNestedManyWithoutEncounter_slotsInput;
}
