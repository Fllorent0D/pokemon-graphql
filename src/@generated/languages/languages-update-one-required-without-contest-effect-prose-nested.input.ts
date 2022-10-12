import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutContest_effect_proseInput } from './languages-create-without-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutContest_effect_proseInput } from './languages-create-or-connect-without-contest-effect-prose.input';
import { languagesUpsertWithoutContest_effect_proseInput } from './languages-upsert-without-contest-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutContest_effect_proseInput } from './languages-update-without-contest-effect-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput {

    @Field(() => languagesCreateWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutContest_effect_proseInput)
    create?: languagesCreateWithoutContest_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutContest_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutContest_effect_proseInput;

    @Field(() => languagesUpsertWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutContest_effect_proseInput)
    upsert?: languagesUpsertWithoutContest_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutContest_effect_proseInput)
    update?: languagesUpdateWithoutContest_effect_proseInput;
}
