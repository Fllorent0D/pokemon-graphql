import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_flag_proseMove_flag_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
