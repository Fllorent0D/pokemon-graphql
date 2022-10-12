import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_method_proseUpdateWithoutLanguagesInput } from './encounter-method-prose-update-without-languages.input';
import { encounter_method_proseCreateWithoutLanguagesInput } from './encounter-method-prose-create-without-languages.input';

@InputType()
export class encounter_method_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;

    @Field(() => encounter_method_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateWithoutLanguagesInput)
    update!: encounter_method_proseUpdateWithoutLanguagesInput;

    @Field(() => encounter_method_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_method_proseCreateWithoutLanguagesInput)
    create!: encounter_method_proseCreateWithoutLanguagesInput;
}
