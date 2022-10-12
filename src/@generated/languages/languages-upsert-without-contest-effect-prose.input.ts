import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutContest_effect_proseInput } from './languages-update-without-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutContest_effect_proseInput } from './languages-create-without-contest-effect-prose.input';

@InputType()
export class languagesUpsertWithoutContest_effect_proseInput {

    @Field(() => languagesUpdateWithoutContest_effect_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutContest_effect_proseInput)
    update!: languagesUpdateWithoutContest_effect_proseInput;

    @Field(() => languagesCreateWithoutContest_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutContest_effect_proseInput)
    create!: languagesCreateWithoutContest_effect_proseInput;
}
