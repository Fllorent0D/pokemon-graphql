import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_category_proseItem_category_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    item_category_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
