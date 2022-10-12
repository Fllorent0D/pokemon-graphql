import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsCreateWithoutEncounter_method_proseInput } from './encounter-methods-create-without-encounter-method-prose.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput } from './encounter-methods-create-or-connect-without-encounter-method-prose.input';
import { encounter_methodsUpsertWithoutEncounter_method_proseInput } from './encounter-methods-upsert-without-encounter-method-prose.input';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { encounter_methodsUpdateWithoutEncounter_method_proseInput } from './encounter-methods-update-without-encounter-method-prose.input';

@InputType()
export class encounter_methodsUpdateOneRequiredWithoutEncounter_method_proseNestedInput {

    @Field(() => encounter_methodsCreateWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsCreateWithoutEncounter_method_proseInput)
    create?: encounter_methodsCreateWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput)
    connectOrCreate?: encounter_methodsCreateOrConnectWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsUpsertWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsUpsertWithoutEncounter_method_proseInput)
    upsert?: encounter_methodsUpsertWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_methodsWhereUniqueInput)
    connect?: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsUpdateWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => encounter_methodsUpdateWithoutEncounter_method_proseInput)
    update?: encounter_methodsUpdateWithoutEncounter_method_proseInput;
}
