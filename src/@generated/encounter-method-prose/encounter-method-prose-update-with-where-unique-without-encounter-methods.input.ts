import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_method_proseUpdateWithoutEncounter_methodsInput } from './encounter-method-prose-update-without-encounter-methods.input';

@InputType()
export class encounter_method_proseUpdateWithWhereUniqueWithoutEncounter_methodsInput {

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;

    @Field(() => encounter_method_proseUpdateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateWithoutEncounter_methodsInput)
    data!: encounter_method_proseUpdateWithoutEncounter_methodsInput;
}
