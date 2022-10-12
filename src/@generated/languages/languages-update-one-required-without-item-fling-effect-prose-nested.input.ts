import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_fling_effect_proseInput } from './languages-create-without-item-fling-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_fling_effect_proseInput } from './languages-create-or-connect-without-item-fling-effect-prose.input';
import { languagesUpsertWithoutItem_fling_effect_proseInput } from './languages-upsert-without-item-fling-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_fling_effect_proseInput } from './languages-update-without-item-fling-effect-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput {

    @Field(() => languagesCreateWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_fling_effect_proseInput)
    create?: languagesCreateWithoutItem_fling_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_fling_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_fling_effect_proseInput;

    @Field(() => languagesUpsertWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_fling_effect_proseInput)
    upsert?: languagesUpsertWithoutItem_fling_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_fling_effect_proseInput)
    update?: languagesUpdateWithoutItem_fling_effect_proseInput;
}
