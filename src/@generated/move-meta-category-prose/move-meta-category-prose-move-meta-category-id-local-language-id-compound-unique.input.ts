import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_meta_category_proseMove_meta_category_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    move_meta_category_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
