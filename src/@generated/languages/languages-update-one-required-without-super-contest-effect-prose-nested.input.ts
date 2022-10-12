import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutSuper_contest_effect_proseInput } from './languages-create-without-super-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutSuper_contest_effect_proseInput } from './languages-create-or-connect-without-super-contest-effect-prose.input';
import { languagesUpsertWithoutSuper_contest_effect_proseInput } from './languages-upsert-without-super-contest-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutSuper_contest_effect_proseInput } from './languages-update-without-super-contest-effect-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutSuper_contest_effect_proseNestedInput {

    @Field(() => languagesCreateWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutSuper_contest_effect_proseInput)
    create?: languagesCreateWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutSuper_contest_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesUpsertWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutSuper_contest_effect_proseInput)
    upsert?: languagesUpsertWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutSuper_contest_effect_proseInput)
    update?: languagesUpdateWithoutSuper_contest_effect_proseInput;
}
