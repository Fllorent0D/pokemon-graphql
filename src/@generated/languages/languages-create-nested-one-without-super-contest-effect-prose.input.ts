import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutSuper_contest_effect_proseInput } from './languages-create-without-super-contest-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutSuper_contest_effect_proseInput } from './languages-create-or-connect-without-super-contest-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutSuper_contest_effect_proseInput {

    @Field(() => languagesCreateWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutSuper_contest_effect_proseInput)
    create?: languagesCreateWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutSuper_contest_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutSuper_contest_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
