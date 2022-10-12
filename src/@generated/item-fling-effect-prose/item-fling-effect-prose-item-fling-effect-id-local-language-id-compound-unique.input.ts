import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_fling_effect_proseItem_fling_effect_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    item_fling_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
