import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutEncounter_method_proseInput } from './encounter-methods-create-without-encounter-method-prose.input';

@InputType()
export class encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput {

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsCreateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutEncounter_method_proseInput)
    create!: encounter_methodsCreateWithoutEncounter_method_proseInput;
}
