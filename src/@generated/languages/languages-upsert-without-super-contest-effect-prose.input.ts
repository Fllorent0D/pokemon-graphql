import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutSuper_contest_effect_proseInput } from './languages-update-without-super-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutSuper_contest_effect_proseInput } from './languages-create-without-super-contest-effect-prose.input';

@InputType()
export class languagesUpsertWithoutSuper_contest_effect_proseInput {

    @Field(() => languagesUpdateWithoutSuper_contest_effect_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutSuper_contest_effect_proseInput)
    update!: languagesUpdateWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesCreateWithoutSuper_contest_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutSuper_contest_effect_proseInput)
    create!: languagesCreateWithoutSuper_contest_effect_proseInput;
}
