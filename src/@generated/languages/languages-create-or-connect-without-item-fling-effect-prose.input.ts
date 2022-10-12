import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_fling_effect_proseInput } from './languages-create-without-item-fling-effect-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_fling_effect_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_fling_effect_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_fling_effect_proseInput)
    create!: languagesCreateWithoutItem_fling_effect_proseInput;
}
