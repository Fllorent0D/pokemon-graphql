import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_fling_effect_proseInput } from './languages-create-without-item-fling-effect-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_fling_effect_proseInput } from './languages-create-or-connect-without-item-fling-effect-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_fling_effect_proseInput {

    @Field(() => languagesCreateWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_fling_effect_proseInput)
    create?: languagesCreateWithoutItem_fling_effect_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_fling_effect_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_fling_effect_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
