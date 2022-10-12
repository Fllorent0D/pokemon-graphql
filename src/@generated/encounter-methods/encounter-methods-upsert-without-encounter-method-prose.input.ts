import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsUpdateWithoutEncounter_method_proseInput } from './encounter-methods-update-without-encounter-method-prose.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutEncounter_method_proseInput } from './encounter-methods-create-without-encounter-method-prose.input';

@InputType()
export class encounter_methodsUpsertWithoutEncounter_method_proseInput {

    @Field(() => encounter_methodsUpdateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => encounter_methodsUpdateWithoutEncounter_method_proseInput)
    update!: encounter_methodsUpdateWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsCreateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutEncounter_method_proseInput)
    create!: encounter_methodsCreateWithoutEncounter_method_proseInput;
}
