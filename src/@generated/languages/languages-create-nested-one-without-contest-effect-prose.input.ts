import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutContest_effect_proseInput } from './languages-create-without-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutContest_effect_proseInput } from './languages-create-or-connect-without-contest-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutContest_effect_proseInput {

    @Field(() => languagesCreateWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutContest_effect_proseInput)
    create?: languagesCreateWithoutContest_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutContest_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutContest_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
