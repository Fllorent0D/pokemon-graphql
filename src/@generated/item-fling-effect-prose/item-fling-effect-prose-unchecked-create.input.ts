import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_fling_effect_proseUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    item_fling_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;
}
