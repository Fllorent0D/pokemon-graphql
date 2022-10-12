import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseWhereUniqueInput } from './contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { contest_effect_proseUpdateWithoutLanguagesInput } from './contest-effect-prose-update-without-languages.input';
import { contest_effect_proseCreateWithoutLanguagesInput } from './contest-effect-prose-create-without-languages.input';

@InputType()
export class contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => contest_effect_proseWhereUniqueInput)
    where!: contest_effect_proseWhereUniqueInput;

    @Field(() => contest_effect_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateWithoutLanguagesInput)
    update!: contest_effect_proseUpdateWithoutLanguagesInput;

    @Field(() => contest_effect_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => contest_effect_proseCreateWithoutLanguagesInput)
    create!: contest_effect_proseCreateWithoutLanguagesInput;
}
