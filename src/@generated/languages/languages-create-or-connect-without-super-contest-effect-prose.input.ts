import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutSuper_contest_effect_proseInput } from './languages-create-without-super-contest-effect-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutSuper_contest_effect_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutSuper_contest_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutSuper_contest_effect_proseInput)
    create!: languagesCreateWithoutSuper_contest_effect_proseInput;
}
