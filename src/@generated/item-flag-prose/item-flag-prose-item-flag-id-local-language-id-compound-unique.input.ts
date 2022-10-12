import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_flag_proseItem_flag_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
