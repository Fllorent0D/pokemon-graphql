import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_battle_style_proseMove_battle_style_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
