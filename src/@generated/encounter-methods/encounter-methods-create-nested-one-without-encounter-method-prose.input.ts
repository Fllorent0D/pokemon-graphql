import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsCreateWithoutEncounter_method_proseInput } from './encounter-methods-create-without-encounter-method-prose.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput } from './encounter-methods-create-or-connect-without-encounter-method-prose.input';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';

@InputType()
export class encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput {

    @Field(() => encounter_methodsCreateWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsCreateWithoutEncounter_method_proseInput)
    create?: encounter_methodsCreateWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput)
    connectOrCreate?: encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_methodsWhereUniqueInput)
    connect?: encounter_methodsWhereUniqueInput;
}
