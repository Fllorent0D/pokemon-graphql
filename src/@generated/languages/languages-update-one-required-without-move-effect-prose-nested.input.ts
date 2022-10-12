import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_effect_proseInput } from './languages-create-without-move-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_effect_proseInput } from './languages-create-or-connect-without-move-effect-prose.input';
import { languagesUpsertWithoutMove_effect_proseInput } from './languages-upsert-without-move-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_effect_proseInput } from './languages-update-without-move-effect-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_effect_proseInput)
    create?: languagesCreateWithoutMove_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_effect_proseInput;

    @Field(() => languagesUpsertWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_effect_proseInput)
    upsert?: languagesUpsertWithoutMove_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_effect_proseInput)
    update?: languagesUpdateWithoutMove_effect_proseInput;
}
