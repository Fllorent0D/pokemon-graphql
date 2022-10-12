import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutContest_effect_proseInput } from './languages-create-without-contest-effect-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutContest_effect_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutContest_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutContest_effect_proseInput)
    create!: languagesCreateWithoutContest_effect_proseInput;
}
